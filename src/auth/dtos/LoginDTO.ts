import { IsString, Length } from "class-validator"

export class LoginDTO{
  
  @IsString()
  @Length(5, 30)
  login: string

  @IsString()
  @Length(5, 30)
  password: string
}

