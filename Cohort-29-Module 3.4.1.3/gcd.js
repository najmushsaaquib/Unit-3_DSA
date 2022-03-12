// function runProgram(input=''){
  
    
// }

// if (process.env.USER === "") {
//   runProgram(``);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

let a = "Hello"
let b = "World"

process.stdout.write(`${a} line 30 `); 
process.stdout.write(`${b} line 32 `); 
console.log(b, 1)
console.log(a ,2)