import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ShopifyController } from '../controllers/shopify.controller';
import { ShopifyService } from '../services/shopify.service';
import { ShopModule } from './shop.module';
import { SessionModule } from './session.module';

@Module({
  imports: [HttpModule, ShopModule, SessionModule],
  controllers: [ShopifyController],
  providers: [ShopifyService],
  exports: [ShopifyService],
})
export class ShopifyModule {} 