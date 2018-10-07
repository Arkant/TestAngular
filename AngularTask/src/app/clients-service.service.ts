import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http:Http) { 

  }
  
  getClients() {
    return this.http.get('clients.json').pipe(map(response => response.json()));
  }


  clients = [
    {name: 'One'},
    {name: 'Two'},
    {name: 'Three'},
    {name: 'four'},
  ]
}
