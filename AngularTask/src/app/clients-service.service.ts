import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http:Http) { 

  }
  
  getClientsList() {
    return this.http.get('clients.json')
    .pipe(map(response => response.json()))
    .pipe(map(clients => {
      return clients.map(c => {
        return {
          name: c.general.firstName + ' ' + c.general.lastName,
          image: c.general.avatar
        }
      })
    }))
  }
}
