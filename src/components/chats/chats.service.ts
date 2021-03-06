import { Injectable, NotFoundException } from '@nestjs/common';
import { uniqBy } from 'lodash';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { FindChatsListDto } from './dto/find-chats-list.dto';
import {Messages} from '../../helpers/enums/messages.enum';
import {UsersService} from '../users/users.service';
import {ChatsRepository} from './chats.repository';
import {Chat} from './chat.interface';
import {AddUserToChatDto} from './dto/add-user-to-chat.dto';
import {RemoveUserFromChatDto} from './dto/remove-user-from-chat.dto';
import { Message } from '../messages/message.interface';
import { User } from '../users/user.interface';

@Injectable()
export class ChatsService {

  constructor(
    private readonly chatsRepository: ChatsRepository,
    private readonly usersService: UsersService,
  ) {}

  async findMany(query: FindChatsListDto): Promise<Chat[]> {
    if(query.ids) {
      return this.chatsRepository.findManyByIds(query.ids);
    }
    return this.chatsRepository.findMany({ });
  }

  async setLastMessage(chatId: string, messageId: string): Promise<void> {
    await this.chatsRepository.setLastMessage(chatId, messageId);
  }

  async addUserToChat(adderId: string, { chatId, userId }: AddUserToChatDto): Promise<{ chat: Chat | null, user: User }> {
    const [chat, user] = await Promise.all([
      this.findOneByIdAndUserId(chatId, adderId),
      this.usersService.findOne(userId),
    ]);

    if (!user) {
      throw new NotFoundException(Messages.USER_NOT_FOUND);
    }

    if (!chat) {
      throw new NotFoundException(Messages.CHAT_NOT_FOUND);
    }

    const updatedChat = await this.chatsRepository.addUserToChat(chat._id, user._id);
    return {
      chat: updatedChat,
      user
    }
  }

  async removeUserFromChat(adminId: string, { chatId, userId }: RemoveUserFromChatDto): Promise<{ chat: Chat | null, user: User }> {
    const [chat, user] = await Promise.all([
      this.chatsRepository.findOneByIdAndAdminId(chatId, adminId),
      this.usersService.findOne(userId),
    ]);

    if (!user) {
      throw new NotFoundException(Messages.USER_NOT_FOUND);
    }

    if (!chat) {
      throw new NotFoundException(Messages.CHAT_NOT_FOUND);
    }

    const updatedChat = await this.chatsRepository.removeUserFromChat(chat._id, user._id);
    return {
      chat: updatedChat,
      user
    }
  }

  async leaveChat(chatId: string, userId: string): Promise<Chat | null> {
      const chat = await this.findOne(chatId);

      if (!chat) {
          throw new NotFoundException(Messages.CHAT_NOT_FOUND);
      }

      return this.chatsRepository.removeUserFromChat(chatId, userId);
  }

  async findOne(id: string): Promise<Chat | null> {
    return this.chatsRepository.findChatById(id)
  }

  async createOne(userId: string, { name, userIds }: CreateChatDto): Promise<Chat> {
    userIds.push(userId);
    const chat: Partial<Chat> = {
        name,
        admin: userId,
        createdAt: new Date(),
        users: uniqBy(userIds, id => id),
    };

    return this.chatsRepository.save(chat);
  }

  async updateById(id: string, payload: UpdateChatDto): Promise<Chat | null> {
    return this.chatsRepository.updateById(id, payload);
  }

  async deleteById(id: string): Promise<void> {
    await this.chatsRepository.deleteById(id);
  }

  async findOneByIdAndUserId(chatId: string, userId: string): Promise<Chat | null> {
    return this.chatsRepository.findOneByIdAndUserId(chatId, userId);
  }

  async filterMessages(message: Message, chatId: string, userId: string): Promise<boolean> {
    if(message.chat.toString() !== chatId) {
      return false;
    }

    const chat = await this.findOneByIdAndUserId(chatId, userId);
    return !!chat;
  }
}