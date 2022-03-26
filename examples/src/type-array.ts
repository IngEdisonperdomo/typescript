//Corchetes []
//Tipo explicito
let users: string[];
users = ["edison", "perdomo", "camacaro"];
//users = [1, true, 'test'] Error

let otherUser = ["edison", "perdomo", "camacaro"];
//otherUser = [1, true, 'test'];

//array<Tipo>

let pictureTitle: Array<string>;
pictureTitle = ["prueba", "foto", "face"];

console.log(pictureTitle[0]);

console.log(pictureTitle.length);

pictureTitle.push("nuevo elemento");
//ordena el arreglo de forma alfabetica
pictureTitle.sort();
