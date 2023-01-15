import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected mensaje_error:any = undefined;
  protected selectedUsuario : Usuario = this.Limpiar();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  protected Acceso_login() : void{
    if(this.Validar_datos()){
      environment.sesion.edicion_permitida = true;
      environment.sesion.nombre_button = 'CERRAR';
      environment.sesion.ruta_destino = '';
      this.router.navigate(['']);
    }else{
      this.mensaje_error = 'Usuario y/o contraseña incorrectos.';
      this.router.navigate(['login']);
    }
  }

  private Validar_datos() : boolean{
    return this.selectedUsuario.nombre == 'Melina' && this.selectedUsuario.clave == 'argentinaprograma';
  } 

  private Limpiar() : Usuario {
    return {
      id_usuario:0,
      nombre:"",
      clave:""
    }
  }
}