import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ServerService } from '../api/server.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User} from '../user/user';

declare const google: any;

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  providers: [ServerService]
})
export class HomeComponent implements OnInit {

  map: any;
  decoder: any;
  users: User[] = [];

  constructor(private dataService: ServerService, private http: HttpClient) {
  }

  ngOnInit(): void {

    this.map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    this.decoder = new google.maps.Geocoder();

    this.dataService.getAllUser().then(users => {
      this.users = users;
      this.markerUsers();
    }).catch(error => {
      console.log(error);
    });
  }

  markerUsers() {
    for (let user of this.users) {
      if (user.addres != null) {
        this.dataService.getLocation(user.addres).then(adress => {
          var result = adress["results"];
          console.log(result[0].geometry.location)
          this.map.setCenter(result[0].geometry.location);
          var marker = new google.maps.Marker({
            map: this.map,
            position: result[0].geometry.location
          });
        });
      }
    }
  }
}
