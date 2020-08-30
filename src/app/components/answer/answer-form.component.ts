import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../../models/answer.mode';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'answer-form',
    templateUrl:'answer-form.component.html',
    styleUrls:[`./answer-form.component.scss`]
})

export class AnswerFormComponent{

    @Input() private pregunta:Question;

    constructor(private questionService:QuestionService,
                private authService:AuthService,
                private router:Router){}

    public onSumbit(form:NgForm){
        if(this.authService.isLoggedIn()){
            const answer:Answer = new Answer(form.value.description,this.pregunta,undefined,undefined);
            this.questionService.addAnswer(this.pregunta,answer);
            form.reset();
        }else{
            this.router.navigate(['/register']);
        }
        
    }

    public getPregunta():Question{
        return this.pregunta;
    }


}