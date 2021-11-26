import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ClientsComponent } from './component/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SalesComponent } from './component/sales/sales.component';
import { ProductCreateFormComponent } from './component/products/product-create-form/product-create-form.component';
import { ClientCreateFormComponent } from './component/clients/client-create-form/client-create-form.component';
import { SaleCreateFormComponent } from './component/sales/sale-create-form/sale-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SalesComponent,
    ProductCreateFormComponent,
    ClientCreateFormComponent,
    SaleCreateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
