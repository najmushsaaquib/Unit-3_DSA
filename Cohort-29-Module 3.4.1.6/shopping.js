let arr = [1, 2, 3, 4];
let k = 2;
let final = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i ; j < k; j++) {
    final.push(arr[i] + " " + arr[j]);
    // final.push(arr[j]);
  }
}

console.log(final);
