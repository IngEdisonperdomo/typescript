// type object explicita
let user: object;
user = {};

user = {
  id: 1,
  userName: "edison",
  firstName: "perdomo",
  isPro: true,
};

console.log(user);
//console.log(user.username);

//Objects (js) vs object (ts)

let objectJs = {
  id: 1,
  userName: "edison",
  firstName: "perdomo",
  isPro: true,
};

objectJs.userName;
