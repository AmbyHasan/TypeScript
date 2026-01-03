//CLASSES AND OBJECTS


//CLASS
class Device{
    name="lg";
    price=1200;
    category="digital";
}


//instance of class
let d1=new Device();
let d2=new Device();


//----------------------------------------------------------------------------------------------------------------------------------------------

//Constructor -> bottle nhi hoga bottle maker hoga
//class ko jab bhi chalao to  constructor sabse pehle chalta haiii
//seedha constructor me jab likhte hai to we need to add the "public" keyword

class BottleMaker{

    constructor(public name:string  , public price:number ,public material:string){

    }
}

let b1=new BottleMaker("milton" , 300 ,"steel")
console.log(b1);

//------------------------------------------------------------------------------------------------------------------------------------------------------



//this keyword
//jab hm kisi class ke andar hai tab hm uske andar alag alag methods ya functions bana sakte hai  
//to agar hm class ke andar kisi aur entity ko target karte hai jo method ka part nhi hai to we use this keyword

class Abvd{     //eg-1
    name="amber";

    getDetails(){
        console.log(this.name);
    }
}


class Abcd{    //eg-2
    public name;
    constructor(name:string){  

        this.name=name;
        //this name is referring to the variable declared outside i.e public name ( property)
        //name is referring to the name which is declared in the function parameter i.e name : string  (parameter)
    }

}

let obj=new Abcd("amber");


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//ACCESS MODIFIERS -> public , private , protected

// 1-> public  - ap construtor me change karo  , aap method ke andar change karlo , aap kisi dusri class me inherit krke change karlo koi dikkat nhi hai 


// class Ab{
//     constructor(public name:string){  //name setting yaha hogii , this.name = name

//     }
// }

// class Ac extends Ab{

//    constructor(name:string){
//     super(name); //jis class ko extend kiya gya hai uske constructor me name parameter pass kar diya
//    }

//    getValue(){
//     console.log(this.name);
//    }
// }

// let obj1= new Ac("amber");
// obj1.getValue(); //this is valid





// 2- private - class ke andar change kar skte ho , bahar nhii
class Ab{
    constructor(private name:string){  //name setting yaha hogii , this.name = name

    }
}

class Ac extends Ab{

   constructor(name:string){
    super(name); //jis class ko extend kiya gya hai uske constructor me name parameter pass kar diya
   }

   getValue(){
    console.log(this.name);  //here it is giving error because name is private and only accessible within Ab class
    //IMP- > yaha par error to arha hai magar nam change hojayyega , ts hme error to deti hai ki ye galat kr rhe ho magar eventually code chala deti hai..
    //ts ka kam sirf error batana hai , baki code wo chalne deti haiii
   }
}

let obj1= new Ac("amber");
obj1.getValue(); //this is valid


//3- protected 
//the properties which are labelled as protected  ,can only be accessed with in its class and its subclasses


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//READonly Properties

//if we want the variable's value to be constant during inside the entire class

class User{
    constructor( public readonly age :string ){
        
    }

    changeAge(){
        this.age="30"  //will give error as it has readonly property
        //code to chalega magar error batayegi ts
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//GETTERS AND SETTERS

//in js we normally write some get and set function in order to get and set the values present in the classes
// in ts things are bit different
//we will have a look at it now

class User1{
    constructor(public _name:string  ,public age:number){

    }
    get name(){
        return this._name;
    }
}

let u1=new User1("amber" ,22);

console.log(u1.name);  //this is how we will call the get function ..here name is the function and  _name is the varaible which is getting changed through that function


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Static members

//agar koi member ko static bnaa diya hai to bina class ko instantiate kare aap us member ko use kr skte ho

class Amber{
    static version= 1;
}

console.log(Amber.version);

class Num{
    static getRandomNumber(){
        return Math.random;
    }
}


console.log(Num.getRandomNumber());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//ABSTRACT CLASSES

class Payment{   //this is an abstract class , it contains the "base properties" and not the complete properties ,so we need this class but at the same time we need to add some other properties as well
    constructor(protected amount:number ,protected account:number){}

    getValidateAmount(amount:number){
        return this.amount > 0;
    }
}


class UPI extends Payment{
  //here we will include the extra properties of UPI
  //CLASS payment is an abstract class and it contains the base properties of UPI
}








