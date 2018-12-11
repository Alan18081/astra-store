import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../core/base.entity';
import { User } from '../users/user.entity';

@Entity()
export class FriendshipRequest extends BaseEntity {

  @Column()
  receiverId: number;

  @OneToOne(type => User)
  @JoinColumn({ name: 'receiverId' })
  receiver: User;

  @Column()
  senderId: number;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  message?: string;

  // constructor(data: any) {
  //   super();
  //   Object.assign(this, data);
  // }


}