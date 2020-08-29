//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'ngx-moment';
import { HttpClientModule } from '@angular/common/http';
//Modulos de Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import 'hammerjs';
//Componentes
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './components/question/question-detail.component';
import { AnswerFormComponent } from './components/answer/answer-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
//Servicios
import { QuestionService } from './services/question.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    RegisterComponent,
    LoginComponent,
    QuestionListComponent,
    QuestionFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionService,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
