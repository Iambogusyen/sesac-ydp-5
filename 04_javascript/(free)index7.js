// let sum = 0;
// for (let j = 0; j <= 100; j++) {
//   if (j % 2 === 0 || j % 5 == 0) {
//     sum += j;
//     console.log(`j의 값은 ${j}이고, 합계는 ${sum}입니다.`);
//   }
// }

// let number = prompt('숫자를 입력해주세요!');
// number = Number(number);

// for (let i = 1; i < number; i++) {
//   if (i % 13 === 0 && i % 2 !== 0) {
//     console.log(`${i}는 ${number}까지의 13의 배수이자 홀수 입니다.`);
//   }
// }

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`---- ${i}단 ---`);
}
