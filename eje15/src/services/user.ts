import {  Injectable} from "@angular/core";



@Injectable()
export class UserService{
    private _curp:string;
    

    constructor(){
       
    }

    get curp():string{
        return this._curp
    }
    set curp(newVal:string){
        this._curp=newVal;
    }

  





    
}