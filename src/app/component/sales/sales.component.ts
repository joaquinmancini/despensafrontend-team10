import {
  Component,
  OnInit
} from '@angular/core';
import {
  Sale
} from 'src/app/models/sale/sale.model';
import {
  SaleService
} from 'src/app/services/sale/sale.service';
import {
  MatDialog
} from "@angular/material/dialog";
import {
  SaleCreateFormComponent
} from './sale-create-form/sale-create-form.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public sales: Sale[];

  constructor(private _sale: SaleService,
    private dialog: MatDialog) {
      this.sales = [];
    }

  ngOnInit(): void {
    this._sale.getSales()
      .subscribe(data => this.sales = data.sort((a, b) => a.idSale!-b.idSale!));
  }

  //Actions
  //Creation of product
  // create() {
  //   const dialogRef = this.dialog.open(SaleCreateFormComponent, {});
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this._sale.createSale(result)
  //         .subscribe(
  //           response => {
  //             dialogRef.close();
  //           },
  //           error => {
  //             console.log(error);
  //           });
  //       this.sales.push(result);
  //     }
  //   });
  // }

}
