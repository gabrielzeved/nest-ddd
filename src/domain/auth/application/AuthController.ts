import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { AuthService } from "../domain/service/AuthService";
import { LoginDTO } from "../dtos/LoginDTO";

const AuthService = () => Inject('AuthService');

@Controller('auth')
export class AuthController{
  
  constructor(@AuthService() private readonly authService: AuthService ){}

  @Post('/login')
  @HttpCode(200)
  async login (@Body() loginDTO: LoginDTO){
    return this.authService.authenticate(loginDTO);
  }

}