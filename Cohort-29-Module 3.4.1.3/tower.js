function runProgram(input = "") {
  input = input.trim().split("\n");
  let disc = +input[0];
  let A = +input[1];
  let B = +input[2];
  let C = +input[3];
  toh(disc, A, B, C);
}

function toh(disc, A, B, C) {
  if (disc == 0) return;

  toh(disc - 1, A, C, B);
  console.log(`${disc}[${A} -> ${B}`);
  toh(disc - 1, C, B, A);
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
