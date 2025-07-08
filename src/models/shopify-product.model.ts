export class ShopifyProduct {
  constructor(
    public id: string,
    public title: string,
    public body_html?: string,
    public image?: string,
  ) {}
} 