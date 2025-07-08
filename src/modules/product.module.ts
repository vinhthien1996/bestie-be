import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductController } from '../controllers/product.controller';
import { ShopifyService } from '../services/shopify.service';
import { ShopModule } from './shop.module';
import { SessionModule } from './session.module';

@Module({
  imports: [HttpModule, ShopModule, SessionModule],
  controllers: [ProductController],
  providers: [ShopifyService],
  exports: [ShopifyService],
})
export class ProductModule {} 