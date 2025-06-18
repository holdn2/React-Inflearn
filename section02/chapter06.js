// 순회 (iteration)
// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1-2. for of 반복문. of 뒤에 있는 값을 하나씩 순회하면서 item에 저장함
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "유찬영",
  age: 25,
  hobby: "배드민턴",
};

// 2-1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], person[keys[i]]);
}
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}

// 2-3. for in
for (let key in person) {
  console.log(key, person[key]);
}
