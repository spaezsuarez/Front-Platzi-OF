export class Question{

    private title:String;
    private description:String;
    private createdAt:Date;
    private icon:String;

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

    constructor(title:String,description:String,createdAt:Date,icon:String){
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;

    }
}