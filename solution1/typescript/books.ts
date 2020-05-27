export class Book {
    itemId: number;
    title: string;
    discription?: string;
    price: number;
    isAvailable: boolean;
    imageLink: string;
    bookLink: string;
}

export class Phone {
    
    isDailTone: boolean;

    //Encapsulation
    private _number: number
    get number() { // Getter - Readonly
        return this._number;
    }
   

    private _connectingType: string
    get connectingType() {
        return this._number;
    }
    

    constructor(phoneNumber: number, connectionType: string = 'wierd'){
       this._number = phoneNumber;
       this._connectingType = connectionType;
    }


    makeACall(phoneNumber: number) { 
        if(this.isDailTone && this.number) {
            console.log('Tring tring tring tring tring tring');
        } else {
            console.log('No Dail Tone, Please reach out to telephone exchange');
        }
    }

    //Function Signature - name of the function(parameters and types) : number(return type of the function)
    addTwoNumber(number1 : number, number2: number): number {
        let result = number1 + number2;
        return result;
    }

    addTwoNumberAsString(number1 : number, number2: number): string {
        let result = number1 + number2;
        return result.toString();
    }

    
    someFunction() {}
}

export class BookCatergory {
    catId: number;
    name: string;
    imageLink: string;

}

export enum BookTypeEnum {
    Health= 'health',
    Parenting= 'paranting',
    Finance = 'finance',
    Programming = 'programming'
}

export enum Tempratures {
     freezingTemp,
     boilingTemp = 100,
     roomtemp= 27,
     hotTemp = 40

}

export enum DaysInAWeek { //Number (Int)
    Monday, //0
    Tuesday,
    Wednsday,
    Thursday,
    Friday = 10,
    Saturday,
    Sunday
}