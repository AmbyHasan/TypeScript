"use strict";
//tsc --watch ->isse ts ke code tm jaise jaise likhte jaoge waise waise wo js me convert hota jayega
//tsc app.ts -> for manually compiling the typescript file into js file
//BASIC TYPES
//Reference  -> [] ,{} ,() agar ye bracket mil gye to vo values refrence wali hogi , yani parent pe bhi  changes reflect hote haiii
// 1 -  Primitve types (number ,string ,boolean)
//var ka kam use karna hai , let aur const ka use zyada krna hai
let a = 12;
// 2 -> arrays
let arr; //declaring the type of array
arr = [1, 2, 3];
let vec = arr; //changes made in vec will be reflected in arr
//3 ->tuples
let brr = ["amber", 22];
// 4 -> Enums
//jab hme values ko key value pair ke form me store krna ho , we use enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
//UserRoles.ADMIN
//5->Any , when we create a variable and do not assign any type to it
let x; // here the type of x is any ,any ke bad typescript off ho jati hai ki ho man karna ho wo karlo
//6 -> unknown
let y;
y = 12;
y = "amber";
if (typeof y === "string") {
    y.toUpperCase();
}
//y.toUpperCase(); directly writing this will give us error , any will not give us any error in this case
//7 -> void
function abcd() {
    console.log("2");
    //return 2 ,this will give us error as the type is void
}
//8 ->NULL
let g = null;
//9 -> Undefined
let k; //not giving any value to the variable
//10- >Never , infinte loop me le jata hai code
