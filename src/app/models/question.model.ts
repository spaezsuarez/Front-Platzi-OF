import { Answer } from './answer.mode';
import  { User }  from './user.model';

export class  Question{

    public _id?:number;
    public title:String;
    public description:String;
    public createdAt:Date;
    public icon:String;
    public user:User;
    public respuestas:Answer[];

    public getId():number{
        return this._id;
    }

    public getTitle():String{
        return this.title;
    }

    public getDescription():String{
        return this.description;
    }

    public getCreatetionDate():Date{
        return this.createdAt;
    }

    public getIcon():String{
        return this.icon;
    }

    public getRespuestas():Answer[]{
        return this.respuestas;
    }

    public getUser():User{
        return this.user;
    }

    constructor(id:number,title:String,description:String,createdAt:Date,icon:String){
        this._id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.respuestas = [];
    }

    public setUser(user:User):void{
        this.user = user;
    }

    public setRespuestas(respuesta:any[]):void{
        this.respuestas = respuesta;
    }
}