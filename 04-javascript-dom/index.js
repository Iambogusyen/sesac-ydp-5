// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2); // { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터도 같고 참조값(address, 주소)도 같다

//////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터는 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

///////////

const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4);

/////////
// 객체 리터럴(object literal), 딕셔너리
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

///////////////////////////
console.clear();

// js 표준 내장객체
// 1. Date 객체 : 시간, 날짜
let now = new Date(); // 현재 일시
console.log(now);

// 타임스탬프(timestamp)
// : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970);

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);

let date2 = new Date('2023', '06', '17'); // MM(0(1월)~11(12월) 주의)
console.log(date2);

// 관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth());
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay());

console.table(date1.getDay());

const day = new Date('2023-07-30');
const nowDay = day.getDay();
const days = ['월', '화', '수', '목', '금', '토', '일'];
const todayNowWeeks = days[nowDay];

if (nowDay > 5 || nowDay === 0) {
  console.log('주말입니다.');
} else {
  console.log('평일입니다.');
}

console.clear();

console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 3) + 20);
