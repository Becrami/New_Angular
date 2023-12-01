import { Component, OnInit} from '@angular/core';
import { Data } from '@angular/router';
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
  dataSource: any = [];
  name: string = "";
  abrev: string = "";
  editingMode: boolean = false;
  year: string = "";
  creator: string = "";
 


  constructor(private usersServices: UsuariosService, private lenguajesServices: LenguajesService, private language: LenguajesService){}

  ngOnInit()
  {
    this.usersServices.getUsers().subscribe( (data) => {
      this.dataUsers = data;
    })
    this.language.getListlanguages().subscribe( (data )=> {
      for (var key in data) 
      {
        var row = {id:key, abrev: data[key].abrev, name: data[key].name,  year: data[key].year, creator: data[key].creator }
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    })
  }

  save()
  {
    let body =
    {
      name: this.name,
      abrev: this.abrev,
      year: this.year,
      creator: this.creator

    }
    this.language.postlanguages(body).subscribe( (data) => {
      if(data!=null)
      {
        const newRow = {
          id: data.id,
          name: this.name,
          abrev: this.abrev,
          year: this.year,
          creator: this.creator
        };
        this.dataSource.push(newRow);

        this.name = '';
        this.abrev = '';
        this.year = '';
        this.creator = '';

        window.location.reload(); 
      }
    })
  }
  borrar(id:string){
    let aux = confirm("Estas seguro de eliminar")
    if(!aux) return
    this.language.deletelanguages(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload(); 
      }
    })
  }
 
  editRow: { id: string, name: string, abrev: string, year: string, creator: string } = { id: '', name: '', abrev: '', year: '', creator: '' };
  actualizar(id: string) {
    let aux = confirm("Estás seguro de actualizar");
    if (!aux) return;
    // Encuentra la fila correspondiente en dataSource y almacena los datos en editRow
    const foundRow = this.dataSource.find((row: { id: string, name: string, abrev: string, year: string, creator: string}) => row.id === id);

    if (foundRow) {
      this.editRow = { ...foundRow };
  
      // Asigna los valores a las variables name y abrev para que aparezcan en el formulario
      this.name = this.editRow.name;
      this.abrev = this.editRow.abrev;
      this.year = this.editRow.year;
      this.creator = this.editRow.creator
  
      this.editingMode = true; // Activa el modo de edición
    } else {
      console.error('No se encontró ninguna fila con el ID proporcionado.');
    }
  }
  
  update() {
    // Actualiza los datos en dataSource usando los valores modificados
    this.editRow.name = this.name;
    this.editRow.abrev = this.abrev;
    this.editRow.year = this.year;
    this.editRow.creator = this.creator
  
    // Llama a tu servicio para actualizar los datos en la base de datos
    this.language.updateLanguage(this.editRow.id, { name: this.name, abrev: this.abrev, year: this.year, creator: this.creator })
      .subscribe((data) => {
        if (data != null) {
          this.editingMode = false; // Desactiva el modo de edición
          window.location.reload();
        }
      });
  }
  

}
