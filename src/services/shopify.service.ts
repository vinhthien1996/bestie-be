import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ShopifyProduct } from '../models/shopify-product.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ShopifyService {
  constructor(private readonly httpService: HttpService) {}

  async getProducts(shop: string, accessToken: string): Promise<ShopifyProduct[]> {
    const url = `https://${shop}/admin/api/2023-07/products.json`;
    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          'X-Shopify-Access-Token': accessToken,
          'Content-Type': 'application/json',
        },
      })
    );
    const data = response.data;
    return (data.products || []).map((p: any) => new ShopifyProduct(
      p.id,
      p.title,
      p.body_html,
      p.image?.src,
    ));
  }
} 