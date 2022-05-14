import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ClassValidationPipe } from 'src/shared/pipes/ClassValidationPipe';
import { CreateUserDTO } from 'src/user/dtos/CreateUserDTO';
import { AuthGuard } from '../../../auth/shared/AuthGuard';
import { GetUserByEmailDTO } from '../../dtos/GetUserByEmailDTO';
import { UserByEmailCommand } from '../commands/UserByEmailCommand';
import { UserCreateCommand } from '../commands/UserCreateCommand';

@Controller('users')
export class UserController {
  constructor(
    private readonly userCreateCommand: UserCreateCommand,
    private readonly userByEmailCommand: UserByEmailCommand  
  ) {}

  @Post()
  create(@Body() createDTO: CreateUserDTO) {
    return this.userCreateCommand.create(createDTO);
  }

  @UseGuards(new AuthGuard())
  @Get(':email')
  findByEmail(@Param() findByEmailDTO: GetUserByEmailDTO) {
    return this.userByEmailCommand.userByEmail(findByEmailDTO);
  }
}
