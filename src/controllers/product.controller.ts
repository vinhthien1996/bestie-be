import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { ShopifyService } from '../services/shopify.service';
import { ShopifyProduct } from '../models/shopify-product.model';
import { ShopService } from '../services/shop.service';
import { SessionService } from '../services/session.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly shopService: ShopService,
    private readonly sessionService: SessionService,
  ) {}

  @Get()
  async getProducts(@Query('email') email: string): Promise<ShopifyProduct[]> {
    console.log('email', email);
    
    const shop = await this.shopService.findByEmail(email);
    if (!shop) {
      throw new NotFoundException('Shop not found for this email');
    }
    const session = await this.sessionService.findByShop(shop.shopifyDomain);
    if (!session) {
      throw new NotFoundException('Session not found for this shopify domain');
    }
    return this.shopifyService.getProducts(shop.shopifyDomain, session.accessToken);
  }
} 