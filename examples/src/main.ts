//Number explicito
let phone: number;
phone = 1;
phone = 5421;
//phone = '123';  error type

//Number inferido
let phoneNumber = 123456;

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Type boolean
//tipado explicito
let isPro: boolean = true;

//tipado implicito
let isUserPro = false;

//Type string
//tipo explicito
let userName: string = "edison";
// userName = true;     error type dato

//back-tick ``
let userInfo: string = `
    User Info: 
    username: ${userName}
    firstName: ${userName + "perdomo"}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log(userInfo);
