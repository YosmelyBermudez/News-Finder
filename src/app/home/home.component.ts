import { Component, EventEmitter, Output } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listNoticias:any = [];
  loading = false;

  constructor(private _noticiasService: NoticiasService){
    this.loading=true;
    setTimeout(() => {
      this._noticiasService.getNoticias()
    .subscribe(
      (response:any)=>{
        console.log(response)
        this.listNoticias=response["data"]
        this.loading = false;
      }, error => {
        console.log(error);
        
      })
    }, 1000);
    
  }

}
