export class User{

    public email:String;
    public password:String;
    public firstName?:String;
    public lastName?:String;
    public _id?:number
    

    constructor(id:number,firstName:String,lastName:String,email:String,password:String){
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public getFirstName():String{
        return this.firstName;
    }

    public getLastName():String{
        return this.lastName;
    }

    public getEmail():String{
        return this.email;
    }

    public getPassword():String{
        return this.password;
    }

    public getFullName():String{
        return `${this.firstName} ${this.lastName}`;
    }

}