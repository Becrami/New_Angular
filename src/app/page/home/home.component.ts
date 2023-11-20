import { Component, OnInit} from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataUsers: any = [];
  dataLanguajes: any = [];

  constructor(private usersServices: UsuariosService, private lenguajesServices: LenguajesService){}

  ngOnInit()
  {
    this.usersServices.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    })
    this.lenguajesServices.getlenguajes().subscribe( (data) => {
      let arrayLenguajes = [data];
      this.dataLanguajes = arrayLenguajes;
    });
  }
}
