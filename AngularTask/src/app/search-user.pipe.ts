import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(clients, value) {
    return clients.filter(client => {
      return client.name.includes(value);
    });
  }

}
