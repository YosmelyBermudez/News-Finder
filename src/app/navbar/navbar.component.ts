import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() titulo: string;
  constructor() { 
    this.titulo = '';
  }

  ngOnInit(): void {
      
  }
  categoriaSeleccionada = 'all';
  categorias:any[] = [
    {value:'all', nombre:'All'},
    {value:'sports', nombre:'Sports'},
    {value:'world', nombre:'World'},
    {value:'politics', nombre:'Politics'},
    {value:'technology', nombre:'Technology'},
    {value:'startup', nombre:'Startup'},
    {value:'entertainment', nombre:'Entertainment'},
    {value:'miscellaneous', nombre:'Miscellaneous'},
    {value:'science', nombre:'Science'},
    {value:'automobile', nombre:'Automobile'}
  ];
  buscarNoticia(){
    const parametro = {
      categoria: this.categoriaSeleccionada
    }

}

}

