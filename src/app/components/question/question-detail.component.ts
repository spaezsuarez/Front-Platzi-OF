import { Component } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
    selector:'app-question-detail',
    templateUrl:'question-detail.component.html',
    styleUrls: ['./question-detail.component.scss']
})

export class QuestionDetailComponent{

    pregunta:Question = new Question(
        'Esta es una nueva pregunta sobre C#',
        'Tengo una duda con una aplicacion hecha en C# ....',
        new Date(),
        'devicon-csharp-plain colored');
}