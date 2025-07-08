import { Body, Controller, Post, NotFoundException, Get, Query } from '@nestjs/common';
import { ShopifyService } from '../services/shopify.service';
import { ShopifyProduct } from '../models/shopify-product.model';
import { ShopService } from '../services/shop.service';
import { SessionService } from '../services/session.service';

@Controller('shopify')
export class ShopifyController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly shopService: ShopService,
    private readonly sessionService: SessionService,
  ) {}

  @Get('products')
  async getProducts(@Query('email') email: string): Promise<any> {
    const shop = await this.shopService.findByEmail(email);
    if (!shop) {
      return { message: 'Bạn chưa cài đặt app!' };
    }
    const session = await this.sessionService.findByShop(shop.shopifyDomain);
    if (!session) {
      throw new NotFoundException('Session not found for this shopify domain');
    }
    return this.shopifyService.getProducts(shop.shopifyDomain, session.accessToken);
  }
} 