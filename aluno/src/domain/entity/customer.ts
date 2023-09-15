import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;
    private _rewardPoints: number = 0;


    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
        if(this._name.length === 0 ){
            throw new Error("Name is required");
        }
    }

    isActive(): boolean {
        return this._active;
    }

    get id():string { 
        return this._id; 
    }

    get name():string { 
        return this._name; 
    }

    get address():Address { 
        return this._address; 
    }

    get rewardPoints(): number{
        return this._rewardPoints;
    }

    set name(name:string) { 
        this._name = name;
    }

    set address(address:Address) { 
        this._address = address;
     }

    changeName(name:string) {
        this._name = name;
        
    }

    activate() {
        if(this._address === undefined){
            throw new Error("Address is a mandatory to active a customer");
        }
        this._active = true;
    }

    deactivate(){
        this._active = false;
    }

    addRewardPoints(points: number){
        this._rewardPoints += points;
    }

    
}