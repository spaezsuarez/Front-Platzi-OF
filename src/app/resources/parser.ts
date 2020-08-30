import  { Question }  from '../models/question.model';
import { User } from '../models/user.model';
import { Answer } from '../models/answer.mode';

export class Parser{

    public static toQuestion(object:any):Question{
        let pregunta:Question = null;
        pregunta = new Question(object.data.id,object.data.title,object.data.description,
                                object.data.createdAt,object.data.icon);

        const user = new User(object.data.id,object.data.user.firstName,
                              object.data.user.lastName,object.data.user.email,
                              object.data.user.password);
                              
        pregunta.setUser(user);

        pregunta.setRespuestas(this.toArrayAnswers(object.data.respuestas));

        return pregunta;
    }

    public static toArrayQuestions(list:any):Question[]{
        let pregunta:Question = null;
        let preguntas:Question[] = [];

        for(let i=0; i <list.length; i++){

            pregunta = new Question(list[i].id,list[i].title,list[i].description,
                                    list[i].createdAt,list[i].icon);

            preguntas.unshift(pregunta);
        }
       
        return preguntas; 
    }

    public static toArrayAnswers(list:any):Answer[]{
        let respuesta:Answer = null;
        let respuestas:Answer[] = [];

        for(let i=0; i<list.length; i++){
            respuesta = new Answer(list[i].description,list[i].pregunta,list[i].createdAt,list[i].user);
            respuestas.unshift(respuesta);
        }

        return respuestas;

    }
}