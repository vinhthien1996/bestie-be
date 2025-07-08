import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { ShopifyModule } from './modules/shopify.module';
import { DatabaseModule } from './modules/database.module';
import { ShopModule } from './modules/shop.module';
import { ConfigModule } from '@nestjs/config';
import { SessionModule } from './modules/session.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule, ShopifyModule, ShopModule, SessionModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
