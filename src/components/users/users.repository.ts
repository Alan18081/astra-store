import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { BaseRepository } from '../core/base.repository';

@Injectable()
export class UsersRepository extends BaseRepository<User> {

  constructor(@InjectModel('User') userModel: Model<User>) {
    super(userModel);
  }

  async findManyByIds(ids: string[]): Promise<User[]> {
    return this.model.find({ _id: { $in: ids } });
  }

  async findById(id: string): Promise<User | null> {
    return this.model.findById(id);
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.model.findOne({ email });
  }

  async findOneByGoogleId(googleId: string): Promise<User | null> {
    return this.model.findOne({ googleId });
  }

  async findUserFriends(userId: string): Promise<User[]> {
    return this.model.find({ friends: { $contains: userId } });
  }

  async addFriend(userId: string, friendId: string): Promise<User | null> {
    return this.model.findByIdAndUpdate(userId, { $addToSet: { friends: friendId }});
  }

  async removeFriend(userId: string, friendId: string): Promise<User | null> {
    return this.model.findByIdAndUpdate(userId, { pull: { friends: friendId }});
  }

  async findUserWithFriend(userId: string, friendId: string): Promise<User | null> {
    return this.model.findOne({ _id: userId, friends: { $contains: friendId } });
  }
}