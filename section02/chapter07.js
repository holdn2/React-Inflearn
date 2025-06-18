// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드. 반환값은 push 이후의 배열의 길이
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);
// console.log(arr1, newLength);

// 2. pop
// 배열의 맨 뒤 요소를 제거하고 해당 요소를 반환한다.
let arr2 = [1, 2, 3, 4];
const poppedItem = arr2.pop();
// console.log(arr2, poppedItem);

// 3. shift
// 배열의 맨 앞 요소를 제거하고 해당 요소를 반환한다.
let arr3 = [1, 2, 3, 4];
const shiftedItem = arr3.shift();
// console.log(arr3, shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드. 반환값은 push와 동일하게 변경 후 배열의 길이
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(arr4, newLength2);

/**
 * shift, unshift가 push, pop 보다 느리게 동작한다.
 * 맨 뒤에 있는 요소는 그냥 마지막을 조작하면 되지만 맨 앞 요소는 다른 인덱스들도 위치가 바껴야 한다.
 */

// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내어 새로운 배열을 반환한다. 원본 배열은 변경되지 않음
// 두 번째 인자에는 원하는 인덱스에 +1 한 값을 넣어줘야 한다.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);
// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
