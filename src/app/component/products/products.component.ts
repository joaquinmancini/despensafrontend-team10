import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from 'src/app/models/product/product.model';
import {
  ProductService
} from 'src/app/services/product/product.service';
import {
  MatDialog
} from "@angular/material/dialog";
import {
  ProductCreateFormComponent
} from './product-create-form/product-create-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private _product: ProductService,
    private dialog: MatDialog) {
    this.products = [];
  }

  ngOnInit(): void {
    this._product.getProducts()
      .subscribe(data => this.products = data.sort((a, b) => a.idProduct!-b.idProduct!));
  }

  //Actions
  //Creation of product
  create() {
    const dialogRef = this.dialog.open(ProductCreateFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._product.createProduct(result)
          .subscribe(
            response => {
              dialogRef.close();
            },
            error => {
              console.log(error);
            });
        this.products.push(result);
      }
    });
  }

}
