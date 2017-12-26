import { Component, OnInit} from '@angular/core';
import { ServerService } from '../api/server.service';
import { User } from './user';
@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  providers: [ServerService]
})

export class UserComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  users: User[] = [];

  ngOnInit(): void {

    this.serverService.getAllUser().then(users => {
      this.users = users;
    }).catch(error => {
      console.log(error);
    });
  }

}
