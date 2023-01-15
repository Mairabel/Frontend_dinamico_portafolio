import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Persona from '../../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected persona : Persona = this.Limpiar();
  protected mensaje_error:any = undefined;

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_persona();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  private Instanciar_persona() : void{
    this.persona = {
      id_persona : 1,
      nombre : "Melina",
      apellido : "Beltran",
      telefono : "1234567890",
      email : "melibeltran735@gmail.com",
      direccion : "San Miguel De Tucuman, Argentina",
      presentacion : "Hola,mi nombre es melina y soy Full Stack Developer Jr,aprendo rapido y siempre busco mantenerme actualizada con las nuevas tecnologias",
      titulo : "Full Stack Developer Jr"
    };
  }

  protected Actualizar() : void{
    this.mensaje_error = "ACTUALIZACION EXITOSA"
  }

  protected Reiniciar() : void{
    this.persona = this.Limpiar();
    this.mensaje_error = undefined;
  }

  private Limpiar() : Persona{
    return {
      id_persona : 0,
      nombre : "",
      apellido : "",
      telefono : "",
      email : "",
      direccion : "",
      presentacion : "",
      titulo : ""
    };
  }
}