import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector:'answer-form',
    templateUrl:'answer-form.component.html',
    styleUrls:[`./answer-form.component.scss`]
})

export class AnswerFormComponent implements OnInit{

    public dataForm:any = {
        description:""
    };

    public onSumbit(form:NgForm){
        console.table(form.value.description);
    }

    ngOnInit(){

    }

}