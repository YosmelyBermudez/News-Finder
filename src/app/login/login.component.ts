import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm:FormGroup
  constructor (
    private fb:FormBuilder
    ){
      this.myForm = this.fb.group({
        correo:["",[Validators.required]],
        clave:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      })

  }
  registrarse(){
    console.log(this.myForm.value)
  }


}
