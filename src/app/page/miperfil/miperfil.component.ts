import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent{

  nuevoNombre: string = "";
  nuevoApellidos: string = "";

constructor(private authService: AuthService, private router: Router){}

actualizarPerfil() {
  let aux = confirm("Estas seguro de actualiar el nombre")
  if(!aux) return
  this.authService.actualizarPerfil(this.nuevoNombre, this.nuevoApellidos).then(res => {
    this.router.navigate(['/']);
  }).catch(error => {
    window.alert('Error al actualizar el perfil. Por favor, verifique si está logueado.');
    console.log(error)
  })
}
}