import { HttpException, HttpStatus } from "@nestjs/common";

export namespace CategoryException{

  export enum ErrorCodes{
    CATEGORY_DOES_NOT_EXISTS
  }

  export class DoesNotExists extends HttpException {
    constructor() {
      super({
        message: 'Categoria não existe para o id fornecido',
        code: ErrorCodes.CATEGORY_DOES_NOT_EXISTS
      }, HttpStatus.NOT_FOUND);
    }
  }

}