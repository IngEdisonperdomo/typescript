let client: [string, number];
client = ["Juan", 123];
console.log(client[0]);
console.log(client[1]);

//Tuplas con varios valores
let client2: [string, number, boolean];
client2 = ["Juan", 123, true];

//array de tuplas
let clients: [string, number][] = [];
clients.push(["Juan", 123]);
clients.push(["Pedro", 456]);
clients.push(["Maria", 789]);

//Funciones de arrays
clients[2][0] = "Jorge";
clients[2][0].concat(" extends string");
console.log(clients);
