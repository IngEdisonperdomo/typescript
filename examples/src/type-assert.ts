//<tipo> //Angle Bracket syntax
let userNames: any;
userNames = "Edison";

// Tenemos una cadena TS cofia en mi!
let message: string = (<string>userNames).length > 5 ? "Hola" : "Adios";
console.log(message);

let userNames2: any = "Edison 2";
//Como obtener el username?
let username2 = (<string>userNames2).substring(0, 5);
let username3 = (<string>userNames2).slice(0, 5);

//Sintaxis "as"
message = (userNames as string).length > 5 ? "Hola" : "Adios";
console.log(message);

let helloUser: any;
helloUser = "Hello test";
username3 = (helloUser as string).substring(0, 5);
console.log(username3);
