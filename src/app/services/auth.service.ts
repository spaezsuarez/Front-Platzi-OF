import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import urljoin from 'url-join';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { promise } from 'protractor';

@Injectable()

export class AuthService{

    private currentUser?:User;

    constructor(private htpp:HttpClient,private router:Router){
        if(this.isLoggedIn()){
            const {userId,firstName,lastName,email} = JSON.parse(localStorage.getItem('user'));
            this.currentUser = new User(userId,firstName,lastName,email,undefined);
        }
    }

    public login(user:User):void{
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        this.htpp.post(urljoin(environment.api_url,'auth','login'),body,{headers})
            .subscribe((response:any) => {
                this.saveStorage(response.info);
                this.router.navigate(['/questions']);
            });
    }

    public register(user:User):void{
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        this.htpp.post(urljoin(environment.api_url,'auth','register'),body,{headers})
            .subscribe(async (response:any) => {
                Swal.fire('Yeah',`Registro exitoso `,'success');
                this.router.navigate(['/login']);
            })
    }   

    private saveStorage({token,userId,firstName,lastName,email}):void{
        this.currentUser = new User(userId,firstName,lastName,email,undefined);
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify({userId,firstName,lastName,email}));
    }

    public isLoggedIn():boolean{
        return localStorage.getItem('token') !== null;
    }

    public logout():void{
        localStorage.clear();
        this.currentUser = null;
        this.router.navigate(['/']);
    }

    public getCurrentUser():User{
        return this.currentUser;
    }

    public async getUserName(id):Promise<any>{

        const userId = `?id=${id}`;
        return new Promise((resolve,reject) => {
            this.htpp.get(urljoin(environment.api_url,'auth','name',userId))
            .toPromise()
            .then((response:any) => {
                resolve(response.info.name);
            }).catch((error) => {
                reject(error.info.name);
            });
        });
    }

}