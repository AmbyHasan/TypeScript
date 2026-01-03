//GENERICS




//manlo hme ek function banana hai jo accept krega koi bhi type ki value aur use print karega
//aise mein hum type any nhi use kr skte hain magar wo achi approach nhi hai kuki any lagane ke bad ts band hojayegiii.. ts kahegi ab jo karna ho wo karlo

//aise mein hum use krte hai generics

//Hum ek function ko use krte hue bata skte hai ki function argument ko kis hisab se treat kre

function abcd<T>(a:T){ //a ka type hai string
  console.log(a);
}

abcd<string>("amber") //T ka type string haii

//------------------------------------------------------------------------------------------------------------------------------

//GENERIC INTERFACE


interface Halua<T>{
    name:string ;
    age:number ;
    key:T
}


function ab(obj:Halua<string>){
 console.log(obj.key);
}

ab({name:"amber" , age:21 ,key:"afmdkfna"});

//dimaag ghuma dene wali bat
function abcd<T>(a:T , b:T):T{

   return  "runjhun" as T; //yha par although runjhun ka bhi type hi string hi hai magar phir bhi type T wale variables hi return kr skte hai ye ts ka funda hota haii
}

abcd<string>("amber" ,"hasan");

