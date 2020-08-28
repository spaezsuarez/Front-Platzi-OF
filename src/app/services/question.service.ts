import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Question }  from '../models/question.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { Parser } from '../resources/parser';
import { Router } from '@angular/router';
import { Answer } from '../models/answer.mode';
//Referencias componentes
import { QuestionDetailComponent } from '../components/question/question-detail.component';

@Injectable()

export class QuestionService{

    private answerFormReference:QuestionDetailComponent;

    constructor(private htpp:HttpClient,private router:Router){}

    public setAnswerFormReference(component:QuestionDetailComponent):void{
        this.answerFormReference = component;
    }

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

    public addAnswer(question:Question,answer:Answer):void{
        const body = JSON.stringify(answer);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        this.htpp.post(urljoin(environment.api_url,'questions',''+question.getId(),'respuestas'),body,{headers})
        .subscribe((response:any) => {
            console.log(response);
            this.answerFormReference.renderData();
            this.router.navigate([`questions/${question.getId()}`]);
        })

    }

}