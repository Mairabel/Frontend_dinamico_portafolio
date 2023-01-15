import { Component, OnInit } from '@angular/core';
import Experiencia_laboral from 'src/app/models/experiencia_laboral';
import Educacion from 'src/app/models/educacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  protected experiencias_laborales:Experiencia_laboral[] = [];
  protected experiencias_laborales_editadas:Experiencia_laboral[] = [];
  protected educaciones:Educacion[] = [];
  protected educaciones_editadas:Educacion[] = [];
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected style = "pt-5";

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_educaciones();
    this.Instanciar_experiencia_laboral();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  protected Guardar() : void{
    this.mensaje = "CURRICULUM ACTUALIZADOS";
    for(let educacion_editada of this.educaciones_editadas){
      for(let educacion of this.educaciones){
        if(educacion_editada!=educacion){
          educacion = educacion_editada;
        }
      }
    } 
    for(let experiencia_editada of this.experiencias_laborales_editadas){
      for(let experiencia of this.experiencias_laborales){
        if(experiencia_editada!=experiencia){
          experiencia = experiencia_editada;
        }
      }
    } 
  }

  protected Editar(){
    this.educaciones_editadas = this.educaciones; 
    this.experiencias_laborales_editadas = this.experiencias_laborales; 
  }

  private Instanciar_experiencia_laboral() : void{
    this.experiencias_laborales = [
      {
        id_experiencia_laboral : 1,
        puesto : 'Mantenimiento del fron end',
        empresa : 'De calzados',
        fecha_inicio : '03-03-2022',
        fecha_fin : 'null',
        descripcion : 'Remoto',
        url_imagen : '../../../assets/images/experiencia1.jpg'
      },
      {
        id_experiencia_laboral: 2,
        puesto : 'Mantenimiento del sistema de venta',
        empresa : 'Dulce de Batata ',
        fecha_inicio : '03-03-2020',
        fecha_fin : '12-12-20',
        descripcion : 'Remoto',
        url_imagen : '../../../assets/images/experiencia2.jpg'
      }
    ];
  }
  private Instanciar_educaciones() : void{
    this.educaciones = [
      {
        id_educacion : 1,
        carrera : 'Licenciatura en programacion',
        institucion : 'Universidad Tecnologica Nacional(UTN)',
        fecha_inicio : '01-02-2023',
        fecha_fin : 'null',
        descripcion : 'Ingresante',
        url_imagen : '../../../assets/images/educacion3.jpg'
      },
      {
        id_educacion : 2,
        carrera : 'Introduccion al Frontend',
        institucion : 'Instituto: Ada ITW',
        fecha_inicio : '03-03-2022',
        fecha_fin : '12-12-2022',
        descripcion : 'Curso',
        url_imagen : '../../../assets/images/educacion2.jpg'
      },
      {
        id_educacion : 3,
        carrera : 'Modalidad Polimodal De Bienes y Servicios',
        institucion : 'Esc.Media de La Tuna',
        fecha_inicio : '03-03-2014',
        fecha_fin : '10-12-2019',
        descripcion : 'Bachiller',
        url_imagen : '../../../assets/images/educacion1.jpg'
      } 
    ];
  }
}