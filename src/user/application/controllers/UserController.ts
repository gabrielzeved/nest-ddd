import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ClassValidationPipe } from 'src/shared/pipes/ClassValidationPipe';
import { CreateUserDTO } from 'src/user/dtos/CreateUserDTO';
import { UserCreateCommand } from '../commands/UserCreateCommand';

@Controller()
export class UserController {
  constructor(private readonly userCreateCommand: UserCreateCommand) {}

  @UsePipes(new ClassValidationPipe())
  @Post()
  create(@Body() createDTO: CreateUserDTO) {
    return this.userCreateCommand.create(createDTO);
  }
}
