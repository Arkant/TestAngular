import { Component, OnInit } from '@angular/core';
import { ClientsServiceService } from './clients-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientsServiceService]
})
export class AppComponent implements OnInit {
  title = 'AngularTask';

  clients = [];
  searchStr = '';
  constructor(private clientsService: ClientsServiceService) {
  }

  ngOnInit() {
    this.clientsService.getClientsList().subscribe(
      clients => {
        this.clients = clients;
      });
  
  }
  
}
