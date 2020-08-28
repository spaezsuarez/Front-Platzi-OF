import  { Question }  from './question.model';
import { User } from './user.model';

export class Answer{

    public description:String;
    public pregunta:Question;
    public createdAt:Date;
    public user?:User;

    constructor(descipcion:String,pregunta:Question,createdAt:Date,user:User){
        this.description = descipcion;
        this.pregunta = pregunta;
        this.createdAt = createdAt;
        this.user = user;

    }

    public getDescripcion():String{
        return this.description;
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