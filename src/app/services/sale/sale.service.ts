import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Sale } from 'src/app/models/sale/sale.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url: string = environment.baseUrl + "sales/";
  get_sales:string = "getSales";
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
