import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Client } from 'src/app/models/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = "http://localhost:8080/client";
  get_clients:string = "/getAll";
  create_client:string = "/add";

  constructor(public http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url+this.get_clients)
  }

  createClient(data:any): Observable<any> {
    return this.http.post(this.url+this.create_client, data);
  }
}
