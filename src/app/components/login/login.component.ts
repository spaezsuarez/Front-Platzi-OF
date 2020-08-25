import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formulario:FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.formulario = new FormGroup({
      email:new FormControl(null,[Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password:new FormControl(null,[Validators.required])
    });
  }

  public onSumbit():void{

  }

  public getForm():FormGroup{
    return this.formulario;
  }

}
