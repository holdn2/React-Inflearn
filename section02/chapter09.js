/**
 * 5가지 배열 변형 메서드
 */

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "유찬영", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "테스트", hobby: "독서" },
];
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapRes = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapRes);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드.
let arr3 = ["b", "a", "c"];
arr3.sort();
// console.log(arr3);

// 숫자일 때는 아래와 같이 해야 한다. 콜백함수로 조건을 넣어준다. 아래는 오름차순 정렬 예시이다.
let arr3num = [1, 2, 3];
arr3num.sort((a, b) => {
  if (a > b) {
    // b가 a보다 앞이어야 함. 1 반환
    return 1;
  } else if (a < b) {
    // a가 b보다 앞이어야 함. -1 반환
    return -1;
  } else {
    // 두 값이 같을 때 그대로 유지
    return 0;
  }
});
// console.log(arr3num);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
// 기존 배열을 변경하지 않는다.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5, sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "uchan0"];
const joined = arr6.join();
console.log(joined);
const joined2 = arr6.join("-");
console.log(joined2);
