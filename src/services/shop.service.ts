import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../models/shop.model';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepo: Repository<Shop>,
  ) {}

  async findByEmail(email: string): Promise<Shop | undefined> {
    const shop = await this.shopRepo.findOneBy({ email });
    return shop ?? undefined;
  }
} 