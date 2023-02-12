import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"alta",component:FormComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"categoria/:category",component:CatalogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
