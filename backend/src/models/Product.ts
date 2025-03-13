import { ProductType } from "./ProductType";

const config = require('config');


export class Product {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = config.get("DefaultProductInformation.TaxRate");
  public discountRate: number = config.get("DefaultProductInformation.DiscountRate");
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
}
