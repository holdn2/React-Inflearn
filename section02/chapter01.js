// 1. Falsy한 값 (총 7가지)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  //   console.log("falsy");
}

// 2. Truthy한 값 (7가지 falsy한 값들을 제외한 모든 값)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t3) {
  //   console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
let person = { name: "유찬영" };
let person2;
printName(person);
printName(person2);
