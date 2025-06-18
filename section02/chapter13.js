const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  // executor라고 한다.
  //   setTimeout(() => {
  //     // console.log("안녕");
  //     resolve("안녕");
  //     // reject("실패한 이유...");
  //   }, 2000);

  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      //   resolve(num + 10);
    } else {
      //   reject("num은 숫자여야 한다.");
    }
  }, 2000);
});

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드
// promise가 성공하여 resolve가 호출되면 그 후에 then 메서드에 전달한 콜백함수를 실행함.
// resolve의 인수로 전달된 것이 then메서드의 콜백함수의 인자로 들어감
promise.then((value) => {
  //   console.log(value);
});

// catch 메서드
// 실패했을 경우 콜백 실행됨. 실패했을 때의 then이라고 생각하면 됨
promise.catch((error) => {
  //   console.log(error);
});

// then메서드는 받은 프로미스 객체를 그대로 반환함. 아래처럼 메서드 체이닝으로 사용 가능
promise
  .then((value) => {
    // console.log(value);
  })
  .catch((error) => {
    // console.log(error);
  });

// 프로미스 객체 활용법 예시
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자여야 한다.");
      }
    }, 2000);
  });

  return promise;
}

// 아래처럼 then 메서드도 연달아 사용가능하다.
// return으로 생성한 새로운 객체를 반환하면 메서드 체이닝으로 해당 결과에 then 메서드를 사용할 수 있다.
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10("숫자 아닌 값");
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
