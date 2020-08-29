import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario:FormGroup;

  constructor(private authService:AuthService){}

  public ngOnInit():void{
    this.formulario = new FormGroup({
      email:new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      password:new FormControl(null,[Validators.required]),
      passwordDos:new FormControl(null,[Validators.required]),
      firstName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required])
    });

  }

  public clearForm():void{
    /*this.formulario.value.email = "";
    this.formulario.value.password = "";
    this.formulario.value.firstName = "";
    this.formulario.value.lastName = "";
    this.formulario.value.passwordDos = "";*/
    this.formulario.reset();
  }

  public onSumbit():void{
    if(this.formulario.valid){
      const {email,password,firstName,lastName,passwordDos } = this.formulario.value;
      if(password === passwordDos){
        const user = new User(undefined,firstName,lastName,email,password);
        this.authService.register(user);
      }else{
        Swal.fire('Error','Las contraseñas deben coincidir','error');
      }
    }else{
      Swal.fire('Opps','Los campos deben estar diligenciados','error');
    }
  }

}
