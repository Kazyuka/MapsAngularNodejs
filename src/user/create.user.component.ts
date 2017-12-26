import { Component, OnInit } from '@angular/core';
import { ServerService } from '../api/server.service';
import { User } from './user';
@Component({
  selector: 'create-user-app',
  templateUrl: './create.user.component.html',
  providers: [ServerService]
})

export class CreateUserComponent implements OnInit {

  user: User;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.user = {
      name: "",
      addres: ""
    };
  }

  addPhone(userName: string, coordinate: string) {
     this.serverService.createNewUser(userName, coordinate);
  }
}
