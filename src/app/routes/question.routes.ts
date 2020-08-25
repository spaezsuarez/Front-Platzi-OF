import { QuestionDetailComponent } from '../components/question/question-detail.component';
import { QuestionListComponent } from '../components/question-list/question-list.component';

export const QUESTION_ROUTES = [
    {path:'',component:QuestionListComponent},
    {path:':id',component:QuestionDetailComponent}  
]