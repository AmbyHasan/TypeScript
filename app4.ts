//FUNCTION TYPES


function abcd(name:string , cb:(value:string)=>void){
    cb("hasan");
}

abcd("amber" , (value:string)=>{
    console.log(value)
});


//Function REST Parameter

function abcd(...arr:number[]){ //rest operator

}
abcd(1 ,2 ,3,4 , 5 ,67);


//spread operator
var arr3=[1,2,3,4,5];
var arr2=[...arr3]; //sare arr3 ke numbers utha ke arr2 me daal diye




