 export default class Address {

    _street: string;
    _number: number;
    _zip: string;
    _city: string;


    constructor(_street: string, _number: number, _city: string, zip: string){
        this._street = _street;
        this._number = _number;
        this._city = _city;
        this._zip = zip;
        this.validate();
    }

    validate(){
        if(this._street.length === 0){
            throw new Error("Street is required");
        }
        if(this._number === 0){
            throw new Error("Number is required");
        }

    }

    toString(){
        return `${this._street}, ${this._number}, ${this._zip}, ${this._city}`;
    }

}