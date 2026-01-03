//type inference
let p=12; //ts khud  se figure out kr rhi hai ki p ka type kya hoga by looking at the value of p


//type annotation
let e : number | string ; //hum khud se type define kar rhe haiii



//INTERFACE AND TYPE ALIASES

//INTERFACE -> iska kam hai object ka shape batana

interface User{
   name:string ,
   email:string ,
   password:string ,
   gender? : string , //making it optional , it is not necessary for us to pass it as parameters
}

function getDataOfUser(obj: User){  //obj ka type define krna padega taki ts ko bata sake ki obj ka type kya haiii
       obj.email;
       obj.name;
    
}; 


getDataOfUser({name:" amber" ,email:"amber@gamil.com" ,password:"fsfda"});
//hmne parameter ka type define kar diya hai to function calling ke samay whi parameter pass krne padenge otherwise error aajayegi


//Extending interfaces
//parent wali properties bhi hongi aur apni khud ki properties bhi hongi

interface Admin extends User{
    admin : boolean;
}

function getDataOFAdmin(obj : Admin){
    obj.email;
    obj.admin;
}

//merging of interfaces
interface A{
    name:string
}
interface A{
    email:string
}
///both will get merged into a single interface


//TYPE ALIASES

//apna khud ka type banao aur use kro

type value=string | number | null;
function ab(obj:value){

}


//UNION AND INTERSECTION TYPES

type user1={
    name:string,  
    email:string
}

type admin1= user1 & {
    getDetails(user: string) : void
}

function abcs(a:admin1){
    a.name;
    a.getDetails("amber");
}


