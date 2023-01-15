import { Component, OnInit } from '@angular/core';
import Persona from 'src/app/models/persona';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  protected persona : Persona = this.Limpiar();
  constructor() { }

  ngOnInit(): void {
    this.Instanciar_persona();
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