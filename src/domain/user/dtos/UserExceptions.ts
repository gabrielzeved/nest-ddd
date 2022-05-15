import { HttpException, HttpStatus } from "@nestjs/common";
export namespace UserException{

  export enum ErrorCodes{
    USER_ALREADY_EXISTS
  }
  
  export class AlreadyExistsException extends HttpException {
    constructor() {
      super({
        message: 'Usuário já registrado com o email fornecido',
        code: ErrorCodes.USER_ALREADY_EXISTS
      }, HttpStatus.CONFLICT);
    }
  }

  export class DoesNotExists extends HttpException {
    constructor() {
      super({
        message: 'Usuário não existe',
        code: ErrorCodes.USER_ALREADY_EXISTS
      }, HttpStatus.NOT_FOUND);
    }
  }

}