'use strict';

function highestProduct(arr){
  let h1 = 0;
  let h2 = 0;
  let l1 = 0;
  let l2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high1) {
      h2 = h1;
      h1 = arr[i];
    } else if (arr[i] > h2) {
      h2 = arr[i];
    }
    if (arr[i] < l1) {
      l2 = l1;
      l1 = arr[i];
    } else if (arr[i] < l2) {
      l2 = arr[i];
    }
  }
  return Math.max(h1 * h2, l1 * l2);
}
highestProduct();