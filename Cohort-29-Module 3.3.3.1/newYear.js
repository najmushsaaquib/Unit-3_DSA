
function runProgram(input=''){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1;
  let que = []
  let stack = []
  let front = 0;
  let rear = 0;
  let top = 0;
  
  for(let i=0; i<tc; i++){
     let [type,x] = input[line++].trim().split(' ').map(Number)
     if(type === 1){
         que.push(x)
         rear++
     }
     else if(type ===2){
         stack.push(x)
     }
     else if(type ===3){
         if(que.length == 0){
             
         console.log(-1)
         }
         else {
             
         console.log(que[0])
         }
     }
     else if(type ===4){
         if(stack.length == 0){
             
         console.log(-1)
         }
         else {
             
         console.log(stack[stack.length-1])
         }
     }
     else if(type === 5){
        stack.push(que.shift())
        top++
        front++
     }
     
  }
  
  

}
 


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}