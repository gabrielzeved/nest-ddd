import { IsEmail, IsString, Length } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  @Length(5, 30)
  username: string;

  @IsString()
  password: string;

  @IsString()
  avatar: string;

  @IsString()
  @IsEmail()
  email: string;
}
