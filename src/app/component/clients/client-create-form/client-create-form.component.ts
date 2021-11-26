import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Client
} from 'src/app/models/client/client.model';
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
  selector: 'app-client-create-form',
  templateUrl: './client-create-form.component.html',
  styleUrls: ['./client-create-form.component.scss']
})
export class ClientCreateFormComponent implements OnInit {

  public formInstance: FormGroup;

  constructor(private dialogRef: MatDialogRef < ClientCreateFormComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: Client) {
      this.formInstance = new FormGroup({
        "name": new FormControl('', Validators.required),
      });}

  ngOnInit(): void {}

  saveClient(): void {
    this.dialogRef.close(Object.assign(new Client(), this.formInstance.value));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
