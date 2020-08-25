import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../../models/answer.mode';
import { Question } from '../../models/question.model';
import { User } from 'src/app/models/user.model';

@Component({
    selector:'answer-form',
    templateUrl:'answer-form.component.html',
    styleUrls:[`./answer-form.component.scss`]
})

export class AnswerFormComponent{

    @Input() private pregunta:Question;

    public onSumbit(form:NgForm){

        const answer = new Answer(form.value.description,
            this.pregunta,new Date(),new User('David','Suarez',null,null));

        this.pregunta.getRespuestas().unshift(answer);
        form.reset();
    }

    public getPregunta():Question{
        return this.pregunta;
    }


}