import {
  Component,
  OnInit
} from '@angular/core';
import {
  Client
} from 'src/app/models/client/client.model';
import {
  ClientService
} from 'src/app/services/client/client.service';
import {
  MatDialog
} from "@angular/material/dialog";
import {
  ClientCreateFormComponent
} from './client-create-form/client-create-form.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: Client[];

  constructor(private _client: ClientService,
    private dialog: MatDialog) {
      this.clients = [];
    }

  ngOnInit(): void {
    this._client.getClients()
      .subscribe(data => this.clients = data.sort((a, b) => a.idClient!-b.idClient!));
  }

  //Actions
  //Creation of client
  create() {
    const dialogRef = this.dialog.open(ClientCreateFormComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._client.createClient(result)
          .subscribe(
            response => {
              dialogRef.close();
            },
            error => {
              console.log(error);
            });
        this.clients.push(result);
      }
    });
  }

}
