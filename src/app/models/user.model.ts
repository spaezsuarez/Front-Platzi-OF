export class User{

    private email:String;
    private password:String;
    private firstName?:String;
    private lastName?:String;
    

    constructor(firstName:String,lastName:String,email:String,password:String){
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