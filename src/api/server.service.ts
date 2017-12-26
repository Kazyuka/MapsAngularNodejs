import {Injectable} from '@angular/core';
import {User} from '../user/user';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  createNewUser(userName: string, coordinate: string) {

    var User = {
      name: userName,
      addres: coordinate
    };

    this.http.post("http://localhost:5000/api/users/users", User).subscribe(function (res) {

    });
  }

  getAllUser() {
   return  this.http.get("http://localhost:5000/api/users/users").toPromise().then(data => {
        return this.createArrayUser(data);
      }).then(users => {
         return users;
      }).catch(error => {
         return error;
      });
  }
  getLocation(term: string) {
    if (term != null) {
      return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + term + 'CA&sensor=false').toPromise().then(data => {
        return(data);
      }).then(users => {
        return users;
      }).catch(error => {
        return error;
      });
    }
  }

  createArrayUser(obg: any) {
    for (let f of obg) {
      let user: User = {
        name: f.name,
        addres: f.addres
      }
      this.users.push(user);
    }
    return this.users;
  }
}
