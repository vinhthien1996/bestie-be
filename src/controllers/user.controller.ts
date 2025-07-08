import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() user: User): Promise<User> {
    return this.userService.createOrUpdate(user);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
} 