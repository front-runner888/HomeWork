// dz3
// 1 task
// let a= Number (prompt( 'введите 1-е число'))
// let b= Number (prompt('введите 2-е число'))
// let c=0
// // debugger
// for(let i = a;i<=b; i++){
// c = c+i
// }
// console.log(c) 
// 1 task 2 variant
// let a=  prompt( 'введите 1-е число')
// let n =  prompt('введите 2-е число')
// let sum=Number(a);
// while(a<n){
// a++;
// sum+=a;
// }
// console.log(sum)  

// 2 task
// let n = +prompt("Введите первое число: ");
//   let m = +prompt("Введите второе число: ");
//   let new_n = Math.abs(n);
//   let new_m = Math.abs(m);
//   let max_divisor = 1;
//   let i = 1;
//   while (i <= new_n && i <= new_m) {
//     if (new_n % i == 0 && new_m % i == 0) {
//       max_divisor = i;
//     }
//     i++;
//   }
//   alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);
// 3 task
// let n = +prompt("Введите число: ");
// let new_n = Math.abs(n);
// let divisors = "";
// let i = 1;
// do {
//   if (new_n % i == 0) {
//     divisors += i + ",";
//   }
//   i++;
// } while (i <= new_n);
// alert(`У числа ${n} следующие делители: ${divisors}`);
// }
// // 4 task
// let n = Math.abs(+prompt("Введите число: "));
//   let counter = 0;
//   while (n > 0) {
//     n = Math.trunc(n / 10);
//     counter++;
//   }
//   alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);
// }
// //5 task
// let n = 0;
// let positive_number = 0;
// let negative_number = 0;
// let null_number = 0;
// let even_number = 0;
// let odd_number = 0;
// for (let i = 0; i < 10; i++) {
//   n = +prompt("Введите число: ");
//   if (n > 0) {
//     positive_number += 1;
//   } else if (n < 0) {
//     negative_number += 1;
//   } else {
//     null_number += 1;
//   }
//   !(n % 2) ? (even_number += 1) : (odd_number += 1);
// }
// alert(
//   `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
// );
// //8  task

// let arr_Week = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   let i = 0;
//   let stop = true;
//   while (stop == true) {
//     stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
//     i++;
//     if (i > 6) {
//       i = 0;
//     }
//   }
//   alert("Вывод дней недели окончен!");
// }
// //task9
// let table = "";
//   for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table += `${i} x ${j} = ` + i * j + ", ";
//     }
//   }
//   alert(table);
// }
