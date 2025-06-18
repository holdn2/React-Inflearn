/**
 * 단락 평가 (Short-circuit Evaluation)
 * => 첫 번째 피연산자 값만으로도 연산의 결과가 확정되면 두 번째 피연산자에는 접근조차 하지 않는 것
 */

function returnFalse() {
  console.log("False 함수");
  return undefined;
}
function returnTrue() {
  console.log("True 함수");
  return 10;
}
// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
// console.log(returnFalse() || returnTrue());
// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "유찬영" });
