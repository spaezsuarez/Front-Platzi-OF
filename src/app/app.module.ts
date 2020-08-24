//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'ngx-moment';
//Modulos de Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import 'hammerjs';
//Componentes
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './components/question/question-detail.component';
import { AnswerFormComponent } from './components/answer/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
