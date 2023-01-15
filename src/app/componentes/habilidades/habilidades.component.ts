import { Component, OnInit } from '@angular/core';
import Habilidad, { Tipo } from 'src/app/models/habilidad';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected habilidades : Habilidad[] = [];
  protected selectedHabilidadTecnica : Habilidad = this.Limpiar();
  protected selectedHabilidadBlanda : Habilidad = this.Limpiar();
  protected mensaje:any = undefined;

  constructor() { }

  ngOnInit(): void {
    if(this.acceso){
      this.style = "pt-2";
    }
    this.Instanciar_habilidades();
  }
  
  protected Guardar() : void{
    this.mensaje = "HABILIDADES ACTUALIZADAS";
    if(this.selectedHabilidadTecnica.nombre!="Seleccionar"){
      this.habilidades.filter(habilidad => habilidad.nombre == this.selectedHabilidadTecnica.nombre).map(i => i.porcentaje = this.selectedHabilidadTecnica.porcentaje);
    }
    if(this.selectedHabilidadBlanda.nombre!="Seleccionar"){
      this.habilidades.filter(habilidad => habilidad.nombre == this.selectedHabilidadBlanda.nombre).map(i => i.porcentaje = this.selectedHabilidadBlanda.porcentaje);
    }
  }

  private Instanciar_habilidades() : void{
    this.habilidades = [
      {
        id_habilidad : 1,
        nombre : "HTML",
        porcentaje : 75,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 2,
        nombre : "CSS3",
        porcentaje : 75,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 3,
        nombre : "JavaScrip",
        porcentaje : 50,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 4,
        nombre : "C++",
        porcentaje : 25,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 5,
        nombre : "Java",
        porcentaje : 50,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 6,
        nombre : "Mysql",
        porcentaje : 75,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 7,
        nombre : "Visual Studio Code",
        porcentaje : 75,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 8,
        nombre : "Paquete Office",
        porcentaje : 75,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 9,
        nombre : "Git",
        porcentaje : 50,
        tipo : Tipo.tecnica
      },
      {
        id_habilidad : 10,
        nombre : "Empatia",
        porcentaje : 100,
        tipo : Tipo.blanda
      },
      {
        id_habilidad : 11,
        nombre : "Solidas habilidades de comunicacion",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 12,
        nombre : "Compaginar tareas",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 13,
        nombre : "Gran capacidad de organizacion, planificar y coordinar",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 14,
        nombre : "Liderazgo",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 15,
        nombre : "Responsabilidad y compromiso",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 16,
        nombre : "Paciencia",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 17,
        nombre : "Ingles",
        porcentaje : 50,
        tipo : Tipo.blanda,
      },
      {
        id_habilidad : 18,
        nombre : "Sociabilidad",
        porcentaje : 75,
        tipo : Tipo.blanda,
      },
    ];
  }
  protected Get_habilidades_tecnicas() : Habilidad[]{
    return this.habilidades.filter(habilidad => habilidad.tipo == Tipo.tecnica);
  }
  protected Get_habilidades_blandas() : Habilidad[]{
    return this.habilidades.filter(habilidad => habilidad.tipo == Tipo.blanda);
  }
  private Limpiar() : Habilidad{
    return {
      id_habilidad : 0,
      nombre : "",
      porcentaje : 0,
      tipo : Tipo.blanda
    };
  }
}