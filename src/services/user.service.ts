import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async createOrUpdate(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepo.findOneBy({ id });
    return user ?? undefined;
  }

  async getAll(): Promise<User[]> {
    return this.userRepo.find();
  }
} 