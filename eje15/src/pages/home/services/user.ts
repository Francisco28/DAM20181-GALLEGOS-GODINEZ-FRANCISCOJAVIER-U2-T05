import {  Injectable} from "@angular/core";



@Injectable()
export class UserService{
    private _email:string;
    private _name:string;

    constructor(){
       
    }

    get name():string{
        return this._name
    }
    set name(newVal:string){
        this._name=newVal;
    }

    get email():string{
        return this._email;
    }
    set email(newVal){
        this._email=newVal;
    }





    
}