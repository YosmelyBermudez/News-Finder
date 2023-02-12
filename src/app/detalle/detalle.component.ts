import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id:string
  category:string
  resultado1:any
  constructor(
    private activateRoute: ActivatedRoute,
    private _noticiasService: NoticiasService
  ){
    this.id= this.activateRoute.snapshot.paramMap.get("id") || ""
    this.category= this.activateRoute.snapshot.paramMap.get("category") || ""
    this.init()
  }
  async init(){
    try{
      const detalle = await this._noticiasService.getCategory(this.category) 
      this.resultado1 = {...detalle}
      /**NO ES INDISPENSABLE HACER UNA SECCIÓN DE DETALLE PORQUE NO HAY LINK PARA ESTO */
    }catch(e){
      console.log(e)
    }
  }

}
