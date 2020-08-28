import { Component , OnInit } from '@angular/core';
import { Question }  from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-question-detail',
    templateUrl:'question-detail.component.html',
    styleUrls: ['./question-detail.component.scss']
})

export class QuestionDetailComponent implements OnInit{

    public pregunta:Question

    constructor(private questionService:QuestionService,private route:ActivatedRoute){}

    public ngOnInit():void{

        this.pregunta = new Question(undefined,undefined,undefined,undefined,undefined)

        let id;
        this.route.params.forEach((values) => {
            id = values.id;
        });
        this.questionService.setAnswerFormReference(this);
        this.questionService.getQuestion(id)
            .then((data) => {
                this.pregunta = data;
            }).catch((error) => {
                console.error(error);
        });
    }

    public renderData():void{
        let id;
        this.route.params.forEach((values) => {
            id = values.id;
        });
        this.questionService.getQuestion(id)
            .then((data) => {
                //debugger;
                this.pregunta = data;
            }).catch((error) => {
                console.error(error);
        });
    }

    public getIconClass():String{
        return this.pregunta.getIcon();
    }

    
}