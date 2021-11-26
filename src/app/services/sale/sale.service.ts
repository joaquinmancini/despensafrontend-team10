import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Sale } from 'src/app/models/sale/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url: string = "http://localhost:8080/sales";
  get_sales:string = "/getSales";
  // create_sale:string = "/buyProduct";

  constructor(public http: HttpClient) { }

  getSales(): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.url+this.get_sales)
  }

  //Revisar esta forma de creacion de ventes. Primero en back
  // createSale(data:any): Observable<any> {
  //   return this.http.post(this.url+this.create_sale, data);
  // }
}
