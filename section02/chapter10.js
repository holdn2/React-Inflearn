// 1. Date 객체를 생성하는 법
let date1 = new Date(); // 생성자
// console.log(date1);

let date2 = new Date("1997.01.07.10:10:10");
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01. 00시 00분 00초(UTC)"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 년도
let month = date1.getMonth() + 1; // 월. ** js에서 월은 0부터 시작해서 항상 +1 해줘야함
let date = date1.getDate(); // 일

let hour = date1.getHours(); // 시간
let minute = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(4);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(34);
date1.setSeconds(34);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간을 제외하고 영어로 출력
console.log(date1.toLocaleString()); // 우리나라에 현지화된 날짜 출력
