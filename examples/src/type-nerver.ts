//tipo Never
function handleError(code: number, message: string): never {
  //Process your code here
  //Generate a message
  throw new Error(`${message} .Code ${code}`);
}

handleError(404, "No found");

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);
