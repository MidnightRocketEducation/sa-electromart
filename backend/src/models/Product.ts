import { ProductType } from "./ProductType";

export class Product {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = 1.25;
  public discountRate: number = 0.15;
  public productType: ProductType;

  constructor(title: string, imageUrl: string, basePrice: number, productType: ProductType) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;
    this.productType = productType;
  }

  public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
  }

  public getPriceWithoutTaxes(): number {
    return this.basePrice * (1 - this.discountRate)
  }
}
