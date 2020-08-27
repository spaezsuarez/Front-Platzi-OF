import  { Question }  from '../models/question.model';
import { User } from '../models/user.model';

export class Parser{

    public static toQuestion(object:any):Question{
        let pregunta:Question = null;
        pregunta = new Question(object.data.id,object.data.title,object.data.description,
                                object.data.createdAt,object.data.icon);

        pregunta.setUser(new User(object.data.user.firstName,object.data.user.lastName,
                        object.data.user.email,object.data.user.password));
        return pregunta;
    }

    public static toArrayQuestions(list:any):Question[]{
        let pregunta:Question = null;
        let preguntas:Question[] = [];

        for(let i=0; i <list.questions.length; i++){

            pregunta = new Question(list.questions[i].id,list.questions[i].title,list.questions[i].description,
                                    list.questions[i].createdAt,list.questions[i].icon);

            preguntas.unshift(pregunta);
        }
       
        return preguntas; 
    }
}