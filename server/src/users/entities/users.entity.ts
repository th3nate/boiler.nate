import {Entity, Column, ObjectIdColumn} from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  id!: string;
  
  @ObjectIdColumn({name: 'id'})
  _id!: string;
  
  @Column({unique: true})
  userId: string;
  
  @Column()
  name: string;
  
  @Column()
  username: string;
  
  @Column({
    unique: true
  })
  email: string;
  
  @Column({length: 60})
  password: string;
}
