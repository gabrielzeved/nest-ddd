import { Injectable } from "@nestjs/common";
import { UserByLoginCommand } from "../../../../user/application/commands/UserByLoginCommand";
import { Authentication } from "../../../domain/entities/Authentication";
import { AuthenticableResponse, AuthService } from "../../../domain/service/AuthService";
import * as bcrypt from 'bcrypt';
import { Configurations } from "../../../../shared/config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class InternalAuth implements AuthService{

  constructor(private readonly userByLogin: UserByLoginCommand){}

  async authenticate(auth: Authentication) : Promise<AuthenticableResponse> {
    
    const user = await this.userByLogin.userByEmail({username: auth.login});

    if(!user){
      return {
        authorized: false,
        reason: 'Usuário ou senha não estão corretas',
      }
    }

    const authorized = await bcrypt.compare(auth.password, user.password);

    if(!authorized){
      return {
        authorized,
        reason: 'Usuário ou senha não estão corretas',
      }
    }

    return {
      authorized,
      token: jwt.sign(JSON.stringify(user), Configurations.authSecretKey)
    }
  }
}