import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from 'src/app/models/product/product.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = environment.baseUrl + "product/";
  get_products:string = "getAll";
  create_product:string = "add";

  constructor(public http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+this.get_products)
  }

  createProduct(data:any): Observable<any> {
    return this.http.post(this.url+this.create_product, data);
  }
}
