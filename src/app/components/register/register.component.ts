import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario:FormGroup;

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

  public onSumbit():void{
    if(this.formulario.valid){
      const {email,password,firstName,lastName,passwordDos } = this.formulario.value;
      if(password === passwordDos){
        const user = new User(undefined,firstName,lastName,email,password);
        console.table(user);
      }else{
        console.error('Los campos no coinciden');
      }
    }
  }

}
