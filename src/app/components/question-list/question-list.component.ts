import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';

const pregunta: Question = new Question(
  'Esta es una nueva pregunta sobre C#',
  'Tengo una duda con de como usar C# CON UNITY',
  new Date(),
  'devicon-csharp-plain colored');

const preguntaDos: Question = new Question(
  'ANDROID STUDIO',
  'Como recupero la clave de mi aplicacion?',
  new Date(),
  null);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  private questions: Question[] = [pregunta,preguntaDos];

  constructor() { }

  public ngOnInit(): void {
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

}
