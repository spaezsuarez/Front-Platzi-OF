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

  constructor(private questionService:QuestionService,private router:Router) { }

  public setQuestions():void{
    this.questionService.getQuestions()
    .then((data) => {
      this.questions = data;
    }).catch(() => {
      this.router.navigate(['/login']);
    });
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

  public ngOnInit(): void {
    this.setQuestions();
  }

}
