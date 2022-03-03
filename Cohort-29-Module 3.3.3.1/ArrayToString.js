function runProgram(input=''){
  input = input.trim().split("\n")
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  console.log(arrToStr(arr,n))
}
 
function arrToStr(arr,n){
    let ans=[]
    
    for(let i=0;i<n;i++){
        if(arr[i]<0)ans.push(0)
        else ans.push(arr[i])
    }

    return ans.join('')

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