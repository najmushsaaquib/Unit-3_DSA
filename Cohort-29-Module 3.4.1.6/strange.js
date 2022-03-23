function runProgram(input = "") {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
      arr.sort((a,b) => {return (a-b)})  
  strange(arr, 0 , [])    
}

function strange(arr, index, output) {
  if (output.length > 0) {
    console.log(output.join(" "));
  }

  if (index === arr.length) {
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] > arr[i - 1]) {
      continue;
    }

    output.push(arr[i]);
    strange(arr, index + 1, output);
    output.pop();
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
