//corchets []

//Tipo explicito
let usersT: string[];
usersT = ["Juan", "Pedro", "Maria"];
// usersT = [1,true,'test'] Error

//Tipo inferido
let usersT2: ["Juan", "Pedro", "Maria"];

//Array<Tipo>
let usersT3: Array<string>;
usersT3 = ["Juan", "Pedro", "Maria"];

//Acceso a elementos
console.log(usersT3[0]);

//Propiedades en Arrays
console.log(usersT3.length);

//Uso de funciones
usersT3.push("Jorge");
usersT3.sort();

console.log(usersT3);
