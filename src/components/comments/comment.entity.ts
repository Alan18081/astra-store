import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class CommentEntity {

  @PrimaryGeneratedColumn()
  id: number;

}