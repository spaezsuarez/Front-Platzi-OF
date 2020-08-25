import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QUESTION_ROUTES } from './routes/question.routes';
//Componentes
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'sub_question',component:QuestionFormComponent},
  {path:'questions',children:QUESTION_ROUTES},
  {path: '',   redirectTo: '/login', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
