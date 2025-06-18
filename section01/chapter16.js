let person = {
  name: "유찬영",
  age: 25,
  job: "none",
  hobby: "play",
};
// 객체 프로퍼티 존재 유무를 확인하는 방법(in 연산자)
let res1 = "name" in person;
let res2 = "cat" in person;
console.log(res1, res2);

// 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
};
animal.age = 2; // 추가
animal.name = "히히"; // 수정
delete animal.type; // 삭제
// 객체 값의 프로퍼티를 수정하는 것은 상수 객체여도 가능하다.

// 메서드
// -> 값이 함수인 프로퍼티
const user = {
  name: "유찬영",
  sayHi() {
    console.log("안녕");
  },
};
user.sayHi();
user["sayHi"]();
