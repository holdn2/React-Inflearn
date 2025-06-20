// async
// 어떤 일반적인 함수를 비동기 함수로 만들어주는 키워드
// => 함수가 프로미스를 반환하도록 변환해주는 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "유찬영",
        id: "test",
      });
    }, 1500);
  });
}
// console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드. await 사용하려면 꼭 async를 붙여주자.
// 비동기 함수가 다 처리되기를 기다리는 역할.
// await을 함수 앞에 붙여주면 then 메서드를 쓸 필요 없이 프로미스가 종료될 때까지 기다려준다.
async function printData() {
  const data = await getData();
  console.log(data);
}
printData();
