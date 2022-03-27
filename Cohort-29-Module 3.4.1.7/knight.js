function runProgram(input) {
  let [row, col, n] = input.trim().split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) {
      temp.push(0);
    }
    arr.push(temp);
  }
  //console.log(arr)
  let count = 0;
  followTheKnight(row - 1, col - 1, n, arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        count++;
      }
    }
  }
  console.log(count);
}
let count = 0;
function followTheKnight(row, col, n, arr) {
  if (row < 0 || row > 9 || col < 0 || col > 9) {
    return;
  }
  if (n == 0) {
    arr[row][col] = 1;
    return;
  }
  followTheKnight(row - 2, col - 1, n - 1, arr);
  followTheKnight(row - 2, col + 1, n - 1, arr);
  followTheKnight(row - 1, col + 2, n - 1, arr);
  followTheKnight(row + 1, col + 2, n - 1, arr);
  followTheKnight(row + 2, col + 1, n - 1, arr);
  followTheKnight(row + 2, col - 1, n - 1, arr);
  followTheKnight(row + 1, col - 2, n - 1, arr);
  followTheKnight(row - 1, col - 2, n - 1, arr);
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
