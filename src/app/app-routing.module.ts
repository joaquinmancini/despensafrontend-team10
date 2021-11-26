import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ClientsComponent } from './component/clients/clients.component';
import { SalesComponent } from './component/sales/sales.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
