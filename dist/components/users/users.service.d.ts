import { CreateUserDto } from './dto/create-user.dto';
import { HashService } from '../core/services/hash.service';
import { GoogleUserData } from './interfaces/google-user-data.interface';
import { UsersRepository } from './users.repository';
import { User } from './user.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
import { FindManyUsersListDto } from './dto/find-many-users-list.dto';
export declare class UsersService {
    private readonly usersRepository;
    private readonly hashService;
    constructor(usersRepository: UsersRepository, hashService: HashService);
    findMany(payload: FindManyUsersListDto): Promise<User[]>;
    findManyByIds(ids: string[]): Promise<User[]>;
    findUserFriends(userId: string): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    findOneByGoogleId(id: string): Promise<User | null>;
    createOne(payload: CreateUserDto): Promise<User>;
    createByGoogle(payload: GoogleUserData): Promise<User>;
    updateById(id: string, payload: Partial<User>): Promise<User | null>;
    changePassword(user: User, { oldPassword, newPassword }: ChangePasswordDto): Promise<User | null>;
    deleteById(id: string): Promise<void>;
    setNewPassword(id: string, password: string): Promise<void>;
    addFriend(userId: string, friendId: string): Promise<User | null>;
    removeFriend(userId: string, friendId: string): Promise<User | null>;
    checkIsFriend(userId: string, friendId: string): Promise<boolean>;
}
