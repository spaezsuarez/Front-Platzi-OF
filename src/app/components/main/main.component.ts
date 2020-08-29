import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  public getService():AuthService{
    return this.authService;
  }

  public logout():void{
    this.authService.logout();
  }

  public redirect():void{
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/questions');
    }else{
      this.router.navigateByUrl('/login');
    }
  }

}
