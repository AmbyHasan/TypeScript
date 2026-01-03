//INDEX SIGNATURE


//An index signature in ts allows you to define objects with dynamic keys while specifying the type of their values 


type userDataType={

 [key:string]: number | string ;
 
}

//here we are having dynamic keys
var userData : userDataType = {
    mobile:5358934 ,
    id:10,
    marks:90,
    age:21
}