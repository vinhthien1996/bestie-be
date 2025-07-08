import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from '../models/session.model';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  async findByShop(shop: string): Promise<Session | undefined> {
    const session = await this.sessionRepo.findOneBy({ shop });
    return session ?? undefined;
  }
} 