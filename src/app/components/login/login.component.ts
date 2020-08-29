import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formulario:FormGroup;

  constructor(private authService:AuthService) { }

  public ngOnInit(): void {
    this.formulario = new FormGroup({
      email:new FormControl(null,[Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password:new FormControl(null,[Validators.required])
    });
  }

  public onSumbit():void{
    if(this.formulario.valid){
      const user = new User(undefined,undefined,undefined,this.formulario.value.email,this.formulario.value.password);
      this.authService.login(user);
    }else{
      Swal.fire('Oops','Los campos no pueden estar vacios',"error");
    }
  }

  public getForm():FormGroup{
    return this.formulario;
  }

}
