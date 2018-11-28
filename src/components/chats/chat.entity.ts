import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from '../core/base.entity';
import { User } from '../users/user.entity';
import { Message } from '../messages/message.entity';
import { JoinTable } from 'typeorm';

@Entity()
export class Chat extends BaseEntity {

  @Column('varchar')
  name: string;

  @ManyToMany(type => User, user => user.chats)
  @JoinTable()
  users: User[];

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];
}