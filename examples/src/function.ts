//Usamos TS, definimos tipo para parametros
type SquareSize = "small" | "medium" | "large";

function createPicture(title: string, date: string, size?: SquareSize) {
  console.log("create picture", title, date, size);
}

createPicture("My picture", "today", "large");

//Parametros opcionales
createPicture("My picture", "today");

//Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
  console.log("create picture", title, date, size);
  return {
    title,
    date,
    size,
  };
};

const myPic = createPic("My picture", "today", "small");
console.log(myPic);

//Tipo de retorno typescript funciones
function handleError(code: number, message: string): never | string {
  //Prceso de error
  if (code === 404) {
    throw new Error(`${message}. Code: ${code}`);
  } else {
    return message;
  }
}
try {
  let result = handleError(404, "Not found"); //never
  console.log(result);
} catch (error) {
  console.log(error);
}
