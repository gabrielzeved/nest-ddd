import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  email: string;
}
