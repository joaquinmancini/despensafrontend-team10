import { Client } from "../client/client.model";
import { Product } from "../product/product.model";

export class Sale {
    idSale?:number;
    product?:Product;
    client?:Client;
    date?:Date;
}