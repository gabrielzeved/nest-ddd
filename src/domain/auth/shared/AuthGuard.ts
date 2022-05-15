import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken'
import { Configurations } from '../../../shared/config';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    const authorizationToken : string = request.headers.authorization;
    

    if(!authorizationToken) return false;

    try{

      const authorized = jwt.verify(authorizationToken.split('Bearer ')[1], Configurations.authSecretKey);
      return authorized !== undefined;

    }catch{

      return false;
    
    }
  }
}