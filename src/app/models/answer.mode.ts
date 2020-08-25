import { Question } from './question.model';
import { User } from './user.model';

export class Answer{

    private descripcion:String;
    private pregunta:Question;
    private createdAt:Date;
    private user:User;

    constructor(descipcion:String,pregunta:Question,createdAt:Date,user:User){
        this.descripcion = descipcion;
        this.pregunta = pregunta;
        this.createdAt = createdAt;
        this.user = user;

    }

    public getDescripcion():String{
        return this.descripcion;
    }

    public getPregunta():Question{
        return this.pregunta;
    }

    public getCreateDate():Date{
        return this.createdAt;
    }

    public getUser():User{
        return this.user;
    }
}