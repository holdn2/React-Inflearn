/**
 * 5가지 요소 순회 및 탐색 메서드
 */

// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item, idx) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(7);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드. 존재하지 않으면 -1 반환
let arr3 = [1, 2, 3, 2];
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
// 여러 개라면 제일 처음 것만 반환. 존재하지 않으면 -1 반환
let arr4 = [1, 2, 3, 4];
const findedIndex = arr4.findIndex((item) => item % 2 === 0);
// console.log(findedIndex);

// findIndex가 필요한 이유?
// indexOf를 사용하면 되는데 굳이 왜?
// indexOf는 배열 요소가 객체 타입일 때 찾지 못한다. indexOf는 얕은 비교 연산자로 비교하므로 객체는 참조값을 비교하기 때문에 못찾음

let objectArr = [{ name: "유찬영" }, { name: "홍길동" }];
// console.log(objectArr.indexOf({ name: "유찬영" }));
// console.log(objectArr.findIndex((item) => item.name === "유찬영"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 해당 요소를 반환
let arr5 = [{ name: "유찬영" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "유찬영");
console.log(finded);
