import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Question }  from '../models/question.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { Parser } from '../resources/parser';
import { Router } from '@angular/router';

@Injectable()

export class QuestionService{

    constructor(private htpp:HttpClient,private router:Router){}

    public getQuestions():Promise<Question[]>{
        return new Promise((resolve,reject) => {
            this.htpp.get(urljoin(environment.api_url,'questions')).toPromise()
                .then((response) => {
                    resolve(Parser.toArrayQuestions(response));
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    public getQuestion(id:any):Promise<Question>{
        return new Promise((resolve,reject) => {
            this.htpp.get(urljoin(environment.api_url,'questions','detail',id)).toPromise()
                .then((data) => {
                    resolve(Parser.toQuestion(data));
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    public addQuestion(question:Question):void{
        const body = JSON.stringify(question);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        this.htpp.post(urljoin(environment.api_url,'questions','create'),body,{headers})
           .subscribe(() => {
               this.router.navigate(['/questions']);
           })
       
    }

}