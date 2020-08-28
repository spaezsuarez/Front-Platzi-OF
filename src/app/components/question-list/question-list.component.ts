import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  private questions: Question[];
  private loading:boolean = true;

  constructor(private questionService:QuestionService,private router:Router) { }

  public setQuestions():void{
    this.questionService.getQuestions()
    .then((data) => {
      this.loading = false;
      this.questions = data;
    }).catch((error) => {
      console.log(error);
      this.router.navigate(['/login']);
    });
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

  public getLoadingStatus():boolean{
    return this.loading;
  }

  public ngOnInit(): void {
    this.setQuestions();
  }

  public viewDetail(question:Question):void{
    this.router.navigate([`/questions/${question.getId()}`]);
  }

}
