import { Component, OnInit } from '@angular/core';
import Proyecto from 'src/app/models/proyecto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  protected proyectos:Proyecto[] = [];
  protected proyectos_editados:Proyecto[] = [];
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected mensaje : any = undefined;

  constructor() { }

  ngOnInit(): void {
    this.Intanciar_proyectos();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  protected Guardar() : void{
    this.mensaje = "PROYECTOS ACTUALIZADOS";
    for(let proyecto_editado of this.proyectos_editados){
      for(let proyecto of this.proyectos){
        if(proyecto_editado!=proyecto){
          proyecto = proyecto_editado;
        }
      }
    } 
  }

  protected Editar_proyectos(){
    this.proyectos_editados = this.proyectos; 
  }

  private Intanciar_proyectos() : void{
    this.proyectos = [
      {
        id_proyecto : 1,
        nombre : "Uso de api de Ricki & Morty",
        descripcion : "Uso de las tecnologias de CSS3, HTML5 y Javascript ",
        url_logo : "../../../assets/images/proyecto2.jpg",
        url_repositorio : "https://melina-beltran.github.io/"
      },
      {
        id_proyecto : 2,
        nombre : "Venta de cerveza",
        descripcion : "Uso de las tecnologias Reack y MySql",
        url_logo : "../../../assets/images/proyecto1.jpg",
        url_repositorio : ""
      },
      {
        id_proyecto : 3,
        nombre : "Pagina del clima",
        descripcion : "Uso de las tecnologias Reack y MySql",
        url_logo : "../../../assets/images/proyecto3.jpg",
        url_repositorio : ""
      }
    ];
  }
}