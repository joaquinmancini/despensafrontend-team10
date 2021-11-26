import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = 'assets/img/products.jpg';
  clients = 'assets/img/clients.jpg';
  sales = 'assets/img/sales.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
