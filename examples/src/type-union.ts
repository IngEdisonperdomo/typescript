// 10, '1'
let idUser1: number | string;
idUser1 = 10;
idUser1 = "1";

//buscar user name dado un id
function getUserNameById(id: number | string): string {
  //Logica find user
  return "Edison";
}

getUserNameById(10);
getUserNameById("1");

//Alias typescript
type IdUser = number | string;
type username = string;

let idUser2: IdUser;
idUser2 = 10;
idUser2 = "1";

function getUserName(id: IdUser): username {
  //Logica find user
  return "Edison";
}

//Tipos literales
// 100x100  100x200  100x300
type Size = "100x100" | "100x200" | "100x300";
//let smallPicture: Size = "200x100"; //Error
let smallPicture: Size = "100x100";
