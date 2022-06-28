export class Employee {

    
    constructor(private _id:number,private _name:string,private _phoneNumber:string,private _officeNumber:string,private _position:string,private _manager:string) {}

    public get id():number {
        return this._id
    }
   public set id(id:number) {
        this._id=id
    }

    public get name():string {
        return this._name
    }
    public set name(name:string) {
        this._name=name
    }

    public get phoneNumber():string {
        return this._phoneNumber
    }
    public set phoneNumber(phoneNumber:string) {
        this._phoneNumber=phoneNumber
    }

    public get officeNumber():string {
        return this._officeNumber
    }
    public set officeNumber(officeNumber:string) {
        this._officeNumber=officeNumber
    }

    public get position():string {
        return this._position
    }
    public set position(position:string) {
        this._position=position
    }

    public get manager():string {
        return this._manager
    }
    public set manager(manager:string) {
        this._manager=manager
    }
}
