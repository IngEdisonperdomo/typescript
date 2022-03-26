//Orientación para fotografias
/*const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3;
*/

enum PhotoOrientation {
  landscape = 0,
  portrait = 1,
  square = 2,
  panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.landscape;
console.log(landscape);
console.log(PhotoOrientation[0]);

enum PhotoOrientation2 {
  landscape = 10,
  portrait, // 11
  square, // 12
  panorama, // 13
}

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Ecuador = "ecu",
  Peru = "per",
  Venezuela = "ven",
}

const country: Country = Country.Venezuela;

//Extends enums
enum Color {
  Red,
  Green,
  Blue,
}

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue,
}
