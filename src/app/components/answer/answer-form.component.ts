import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../../models/answer.mode';
import { Question } from '../../models/question.model';
import { User } from 'src/app/models/user.model';
import { QuestionService } from '../../services/question.service';

@Component({
    selector:'answer-form',
    templateUrl:'answer-form.component.html',
    styleUrls:[`./answer-form.component.scss`]
})

export class AnswerFormComponent{

    @Input() private pregunta:Question;

    constructor(private questionService:QuestionService){}

    public onSumbit(form:NgForm){
        console.log(form.value.description);
        const answer:Answer = new Answer(form.value.description,this.pregunta,undefined,undefined);
        this.questionService.addAnswer(this.pregunta,answer);
        form.reset();
    }

    public getPregunta():Question{
        return this.pregunta;
    }


}