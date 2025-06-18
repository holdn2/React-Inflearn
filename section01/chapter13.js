/**
 * 콜백 함수
 * -> 어느 함수를 다른 함수의 인수로 전달해서 나중에 호출하도록 하는 함수를 콜백 함수라고 한다.
 * -> 즉, 다른 함수의 인자로 전달되는 함수
 */
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

// function sub() {
//   console.log("i am sub");
// }

main(() => {
  console.log("i am sub");
});

/**
 * 콜백 함수 활용
 */
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 3);
//   }
// }

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
