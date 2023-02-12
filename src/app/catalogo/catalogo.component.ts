import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
noti: any;
category!: string;
loading=true
constructor(
private activateRoute: ActivatedRoute,
private _noticiasService: NoticiasService
) {
this.activateRoute.params.subscribe((params) => {
this.category = params['category'];
this.init()

});
}

init() {
const categoria = this._noticiasService.getCategory(this.category);
console.log(categoria);
this.noti=[]
this.loading=true
setTimeout(() => {
  categoria.subscribe(
    (response: any) => {
    console.log(response);
    this.loading=false
    this.noti = response['data'];
    
    },
    (error) => {
    console.log(error);
    this.loading=false
    }
    );
  
}, 1000);

}

}
