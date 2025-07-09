import { Controller, Get, Headers, NotFoundException, Query, Req } from '@nestjs/common';
import { ShopifyService } from '../services/shopify.service';
import { ShopifyProduct } from '../models/shopify-product.model';
import { ShopService } from '../services/shop.service';
import { SessionService } from '../services/session.service';
import { Request } from 'express';

@Controller('products')
export class ProductController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly shopService: ShopService,
    private readonly sessionService: SessionService,
  ) {}

  @Get()
  async getProducts(
    @Query() query: any,
    @Headers() headers: any,
    @Req() req: Request
  ): Promise<ShopifyProduct[]> {
    console.log('Shopify Proxy Request Received');
    console.log('Query Params:', query);
    console.log('Headers:', headers);
    console.log('Full Request Info:', {
      method: req.method,
      path: req.path,
      originalUrl: req.originalUrl,
      ip: req.ip,
    });

    const session = await this.sessionService.findByShop(query.shop);
    if (!session) {
      throw new NotFoundException('Session not found for this shopify domain');
    }

    return this.shopifyService.getProducts(query.shop, session.accessToken);
  }
}
