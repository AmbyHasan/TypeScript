//TYPE ASSERTION

//type assertion ka matlab hai ts ko batana ki us variable ka type kya hai
//ye tab hota hai jb aap ts se zyada jante hai us variable ke baare mein


let m:any=12;
m as number;
console.log(m) // this is type assertion


//TYPE CONVERSION OR TYPECASTING
let b=Number("12");
console.log(b);


//Non - null assertion operator

a! //y is bat ki guaranty hogi a kabhi null ya undefined nhi hoga

//-----------------------------------------------------------------------------------------------


//TYPE GUARDS

//iska matlb hai type narrowing
function abc(arg:string | number){
    //arg. ->  ab hm sirf wahi functions access kar skte hai jo string aur number dono me common hote hai

    if(typeof arg==="number"){
     //iske andar arg. me sare number wale functions access ho skte hai
    }else if(typeof arg==="string"){
    //iske andar sare strings wale functions access ho skte haii
    }else{
        throw new Error("Pagal hai kya..")
    }
}

abc(12);
abc("Amber");
