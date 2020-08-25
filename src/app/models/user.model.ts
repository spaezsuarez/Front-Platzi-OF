export class User{

    private firstName:String;
    private lastName:String;

    constructor(firstName:String,lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName():String{
        return this.firstName;
    }

    public getLastName():String{
        return this.lastName;
    }

}