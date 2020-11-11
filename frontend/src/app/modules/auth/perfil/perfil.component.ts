import { Component, OnInit } from '@angular/core';
//import { UserService } from 'Arrova-Academia-Localhost/frontend/src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  userProfile: any = {};

  constructor() { }

  ngOnInit(): void {
    var dataLogin = JSON.parse(localStorage.getItem('user'));

    this.userProfile = dataLogin;

    /*this.userService.showUser(this.userProfile);

    this.userShow = this.userProfile;

    console.log(this.userShow);*/
  }

}
