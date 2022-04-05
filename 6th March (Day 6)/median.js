let nums1 = [1, 2];
let nums2 = [4, 3];

let arr = nums1.concat(nums2);
arr.sort((a, b) => {
  return a - b;
});
let n = arr.length;

if (n % 2 != 0) {
  console.log(arr[Math.floor(n / 2)]);
} else {
  let sum = arr[n / 2] + arr[n / 2 - 1];
  console.log(sum / 2);
}

// console.log(arr)
