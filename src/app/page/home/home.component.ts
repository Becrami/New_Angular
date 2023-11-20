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
  data: any = [];
  name: string = "Python";
  abrev: string = "Py";

  constructor(private usersServices: UsuariosService, private lenguajesServices: LenguajesService, private language: LenguajesService){}

  ngOnInit()
  {
    this.usersServices.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    })
    this.lenguajesServices.getListlanguages().subscribe( (data) => {
      let arrayLenguajes = [data];
      this.dataLanguajes = arrayLenguajes;
    });
    this.language.getListlanguages().subscribe( (data )=> {
      console.log(data)
    })
  }

  save()
  {
    var body =
    {
      name: this.name,
      abrev: this.abrev
    }
    this.language.postlanguages(body).subscribe( (data) => {
      console.log (data)
    })
  }

}
