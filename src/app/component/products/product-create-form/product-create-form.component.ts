import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Product
} from 'src/app/models/product/product.model';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.scss']
})
export class ProductCreateFormComponent implements OnInit {

  public formInstance: FormGroup;

  constructor(private dialogRef: MatDialogRef < ProductCreateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Product) {
      this.formInstance = new FormGroup({
        "name": new FormControl('', Validators.required),
        "description": new FormControl('', Validators.required),
        "quantity": new FormControl(''),
      });
    }

  ngOnInit(): void {}

  saveProduct(): void {
    this.dialogRef.close(Object.assign(new Product(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
