//Tipo explicito
function showInfo(user: any): any {
  console.log("user info", user.id, user.name, user.firstName);
  //return 'hello';
}

showInfo({ id: 1, username: "edison", firstName: "perdomo" });

//Tipo inferido
function showFormattedInfo(user: any): void {
  console.log(`user Info
    id: ${user.id}
    username: ${user.username}
    firstname: ${user.firstName}
    `);
}

showFormattedInfo({ id: 1, username: "edison", firstName: "perdomo" });

//tipo void into var
let unusable: void;
//unusable = null;
