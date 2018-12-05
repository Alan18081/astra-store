import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PaginatedResult } from '../../../helpers/interfaces/paginated-result.interface';
import { PaginationDto } from '../../core/dto/pagination.dto';
import { mockRepository } from '../../../helpers/test-helpers/mock-repository';
import { Chat } from '../chat.entity';
import { ChatsService } from '../chats.service';
import { UsersService } from '../../users/users.service';
import { FindChatsListDto } from '../dto/http/find-chats-list.dto';
import { CreateChatDto } from '../dto/http/create-chat.dto';
import { UpdateChatDto } from '../dto/http/update-chat.dto';

const mockUsersService = {

};

describe('ChatsService', () => {
  let chatsService;
  const mockChats = [new Chat(), new Chat()];


  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [ChatsService, { provide: getRepositoryToken(Chat), useValue: mockRepository }]
    }).overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    chatsService = module.get<ChatsService>(ChatsService);
  });

  describe('findMany', () => {
    const query: FindChatsListDto = {
      userId: 5
    };

    it('should return an array', async () => {
      jest.spyOn(chatsService, 'getRelations').mockImplementation(() => ['users']);
      jest.spyOn(mockRepository, 'find').mockImplementation(() => mockChats);

      expect(await chatsService.findMany(query)).toBe(mockChats);
    });

    it('should call getRelations with query', async () => {
      jest.spyOn(mockRepository, 'find').mockImplementation(() => mockChats);

      const spy = jest.spyOn(chatsService, 'getRelations');
      spy.mockImplementation(() => ['users']);

      await chatsService.findMany(query);
      expect(spy).toBeCalledWith(query);
    });

  });

  describe('findManyWithPagination', () => {
    const query: Required<PaginationDto> = {
      page: 1,
      limit: 2
    };

    const paginatedResult: PaginatedResult<Chat> = {
      itemsPerPage: query.limit,
      totalCount: 5,
      page: query.page,
      data: mockChats,
    };

    it('should return paginated result', async () => {
      jest.spyOn(chatsService, 'getRelations').mockImplementation(() => ['users']);
      jest.spyOn(mockRepository, 'findAndCount').mockImplementation(() => [mockChats, paginatedResult.totalCount]);

      const result = await chatsService.findManyWithPagination(query);

      expect(result).toEqual(paginatedResult);
    });

  });

  describe('findOne', () => {
    it('should return user', async () => {
      const result = new Chat();
      jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => result);

      expect(await chatsService.findOne(5, {})).toEqual(result);
    });
  });

  describe('getRelations', () => {

    it('should return valid array of relations', () => {

    });

  });

  describe('createOne', () => {
    it('should create new user and return it', async () => {
      const payload: CreateChatDto = {
        name: 'My chat',
        userIds: [4, 5]
      };

      const result = {
        ...new Chat(),
        ...payload,
      };

      jest.spyOn(mockRepository, 'save').mockImplementation(async () => result);

      expect(await chatsService.createOne(payload)).toEqual(result);
    });
  });

  describe('updateOne', () => {
    it('should update user and returns it', async () => {
      const payload: UpdateChatDto = {
        name: 'Alan'
      };

      const result = {
        ...new Chat(),
        ...payload,
      };

      jest.spyOn(mockRepository, 'update').mockImplementation(async () => result);
      jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => result);

      expect(await chatsService.updateOne(result.id, payload)).toEqual(result);
    });
  });

});