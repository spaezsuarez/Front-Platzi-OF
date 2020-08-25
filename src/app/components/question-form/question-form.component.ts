import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../../models/question.model';
import icons from '../../resources/icons';
import { Icon } from '../../models/abstract/icon.interface';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  private icons: Icon[] = icons;

  constructor() { }

  public getIcons(): Icon[] {
    return this.icons;
  }

  public getIconVersion(icon: any): String {
    let version = '';
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }

    return version;
  }

  public ngOnInit(): void {
  }

  public onSumbit(form: NgForm) {
    const pregunta = new Question(form.value.title, form.value.desc, new Date(), form.value.icon);
    console.table(pregunta);
  }

}
