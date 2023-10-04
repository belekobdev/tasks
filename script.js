//! Создайте объект в переменной checkTask со свойствами language: 'JS' и framework: 'React'.
// Затем, внутри объекта создайте функцию describe(), которая возвращает значения свойств объектa в виде строки.
// Примените метод describe()
// Вывод должен быть:
// JSReact
// Используйте ключевое слово this.

// const checkTask = {
//     language: "JS",
//     framework: "React",
//     describe() {
//         console.log(this.framework + this.language);
//     }
// }

// checkTask.describe()

//!
// Напишите стрелочную функцию convertStr, которая принимает строку вида 'var_text_hello'.
// Сделайте из него текст 'varTextHello'.
//            Например:
//            console.log(convertStr('hello_world'))
//            Вывод:
//            'helloWorld'

// const convertStr = (str) => {
//   let spl = str.split("_");
//   let toUp = spl.slice(1)
//   let ind = toUp.map(el => {
//     return el[0].toUpperCase() + el.slice(1)
//   })
//   let res = spl[0] + ind
//   return res.split(",").join("")
// };
// console.log(convertStr("var_text_hello_aza_roty_islam_taalai"));

//!
// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// function task(arr, element) {
//     return arr.filter((el) => {
//         return el !== element
//     })
// }
// console.log(task([2, "hello", true,  "world",  5, "js"], "world"));

//!
// Напишите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
// Пример: divisible([1, 2, 3, 4, 5, 6], 2)
// Вывод: [2, 4, 6]

// const task = (arr, del) => {
// let res = arr.filter(el => {
//     return el % del === 0
// })
// return res
// }
// console.log(task([1, 2, 3, 4, 5, 6, 8, 9, 10], 2));

//!
// let arr = ["aza", "roty", "erlan", "islam"];

// console.log(
//   arr.map((el) => {
//     return el.split("").map((el, idx) => {
//         if (idx % 2 !== 0) {
//           return el.toUpperCase();
//         }
//         return el;
//       }).join("");
//   })
// );

//!
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

// function task(str) {
//     let arr = []
//     for (let i of str) {
//         if (i !== "e" && i !== "o" && i !== "a") {
//          arr.push(i)
//         }
//     }
//     return arr.join("").toUpperCase()
// }
// console.log(task("azamat"));

//! Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// function palindrom(word) {
//     word = word.split(" ").join("")
//   let startV = word
//   let endV = word.split("").reverse().join("");
//   if (startV === endV) {
//     return true;
//   } else {
//     return false;
//   }

// }
// console.log(palindrom("nan"));
//! Вывести сумму до первого нуля.
//? кыскартылганы num.reduce((acc, el) => el === 0 ? res = acc : acc + el)
// function task(arr) {
//   let num = 0;
//   arr = arr.reduce((acc, el) => {
//     if (el === 0) {
//       return num = acc;
//     } else {
//       return acc + el;
//     }
//   }, 0);
//   console.log(num);
// }
// task([5, 5, 0, 5, 78, 96]);

//! Уберите последние минусовые значении.
// const checkTask = (num) => {
//   let str = `${num}`;
//   let li = str.length - 1;
//   while (str[li] === "0") {
//     str = str.slice(0, li);
//     li--;
//   }
//   let res = Number(str);
//   return res;
// };
// console.log(checkTask(10050));

//! Вывести цифры без дубликатов.
// const checkTask = (arr) => {
//     return arr.reduce((acc, el, idx) => {
//         if (arr.indexOf(el) === idx) {
//             return acc.concat(el)
//         } else{
//             return acc
//         }
//     }, [])
// }
// console.log(checkTask([18, 21, 1, 1, 1, 51, 18, 21, 5, 18, 7, 10]))

//! Удалите все элементы которые с дубликатами.
// const task = (arr) => {
//     let res =  arr.filter(el => {
//         return arr.indexOf(el) === arr.lastIndexOf(el)
//     })
//     return res
// }
// console.log(task([18, 21, 1, 1, 1, 51, 18, 21, 5, 18, 7, 10]))

//!!!!!!!!!!!!!!!!!!
// let strArr = ['i', 's', 'l', 'a', 'm']; >>>>>> islam
// function task(strArr) {
//     return strArr
// }
// console.log(task(strArr.reduce((acc, el) => acc + el)));

//!!!!!!!!!!!!!!!!!!
// Вам нужно поменять местами значения// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// let a = 0;
// let b = 1;
// [a, b] = [b, a];
// console.log(a);

//!!!!!!!!!!!!!!!!!!!!!
//  Напишите функцию, определяющую// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:

// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// function task(arr) {
// //   let arr ;
//   return arr;
// }
// console.log(task(task5));

// Найдите самый длинный элемент массива и выведите в консоль// ["pen", "pineapple", "apple", "pen"]
// Запрашивать у пользователя строки, пока он сам не решит остановиться, затем вернуть ему массив, который
//  будет состоять из длинн всех строк, которые он вводил

////! >>>> Пирамида
// let num = 7
// let res = ""
// for (let i = 1; i <= num; i++ ){
//     for(let j = 1; j <= i; j++) {
//         res += "#"
//     }

//     res += "\n"

// }
// console.log(res)

//! >>>>> Пирамида2
// function towerBuilder(nFloors) {
//   let res = "";
//     for (let i = 1; i <= nFloors; i++) {
//         for (let j = 1; j <= nFloors - i; j++) {
//             res += " ";
//         }
//         for (let t = 1; t <= 2 * i - 1; t++) {
//             res += "*";
//         }
//         res += "\n";
//     }
//     return res;
// }
// console.log(towerBuilder(6));

/////////////////////////////??!

//! Задание №1
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)
// function task(str) {
//   let arr = str.split(" ");
//   let polin = str.split("").reverse("").join("");
//   if (arr = polin) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(task("nan"));
// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

//! Задание №2
// Найдите самое длинное слово в строке и выведите его в консоли
// const str = "I am a Megalodon, oceans feeling like a pond"

// const str = "I am a Megalodon, oceans feeling like a pond";
// let mega = "";
// for (let i of str) {
// }

// function task() {
//   return;
// }
// console.log(task());
// Задание №3
// Дана функция checkTask(arr) которая принимает массив с предложениями. Необходимо вернуть новый массив с количеством слов в каждом предложении.

// Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// function task(arr) {
//   return arr;
// }
// console.log(
//   task([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );

//! Задание №4
// Дана функция checkTask(arr) которая принимает массив c числами. При помощи метода reduce необходимо вернуть новый массив без дубликатов.

// const checkTask = (arr) => {
//     return arr.reduce((acc, el, idx) => {
//         if (arr.indexOf(el) === idx) {
//             return acc.concat(el)
//         } else{
//             return acc
//         }
//     }, [])
// }
// console.log(checkTask([18, 21, 1, 1, 1, 51, 18, 21, 5, 18, 7, 10]))
// Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]

// let numbers = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

//! Задание №5
// Посчитать сумму чисел до первого нуля.
// let arr = [2, 4, 3, 5, 7, 7, 0, 5, 3, 56, 7, 9];
// let sum = [];
// for (let i of arr) {
//   if (i === 0) {
//     break;
//   } else {
//     sum.push(i);
//   }
// }
// console.log(sum.reduce((acc, el) => acc + el));

// [12, 23, 3, 77, 42, 0, 6, 9, 12, 10]
// function task(arr) {
//     let res = 0
//       return arr.reduce((acc, el) => el === "0" ?  res = acc : acc + el)
//     }
//     console.log(task([12, 23, 3, 77, 42, 0, 6, 9, 12, 10]));

// Задание №6
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное
// значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести
// в консоль аргументы в обратном порядке (использовать цикл while)

// Например:
// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

//! leetCode
// let mergeTwoLists = function(list1, list2) {
//   let all = list1.concat(list2)
//   return all.sort((a,b) => a - b)
// };

//!
// let singleNumber = function(nums) {
//     let uniq = new Set();
//     let uniqSum = 0;
//     let numSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let current = nums[i]
//         if (!uniq.has(current)) {
//             uniq.add(current)
//             uniqSum += current
//         }
//         numSum += current
//     }
//     return uniqSum * 2 - numSum
// };
// console.log(singleNumber([6,1,2,1,2]));

//!
// let isValid = function (s) {
//   let stack = [];
//   let brackets = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (let i = 0; i < s.length; i++) {
//     const current = s[i];
//     if (isClosedBracket(current)) {
//       if (brackets[current] !== stack.pop()) return false;
//     } else {
//       stack.push(current);
//     }
//   }
//   return stack.length === 0;
// };

// function isClosedBracket(ch) {
//   return [")", "}", "]"].indexOf(ch) > -1;
// }
// console.log(isValid("{{}}"));

//!
// function dropCap(n) {
//     let res = n.split(" ").map(el => {
//         if (el.length > 2) {
//             return el[0].toUpperCase() + el.slice(1)
//         } else {
//             return el
//         }
//     })
//     return res.join(" ")
// }
// console.log(dropCap("  Space Walk     "));

//!
// let removeElement = function (nums, val) {
//   let count = [];
//   for (let i of nums) {
//     if (i !== val) {
//       count.push(i);
//     }
//   }
//   return count.length;
// };
// console.log(removeElement([3, 2, 2, 3], 3));

//! two number

/**
//  */
// var twoSum = function(nums, target) {
//     let myHash = new Map();
//     for (let i = 0; i < nums.length; i++){
//         let a = target - nums[i];
//         //a + nums[i] == target
//         if (myHash.has(a)){
//             return [myHash.get(a), i];
//         }
//         myHash.set(nums[i], i);
//     }
//     return [-1, -1];
// };

// n = 100
// i = 100
// j = 100
// ij = 10,000
// ij = n*n

// ij = (n*n)/2 = n * (n/2)= 5,000
// j = n/2

// ij = n*log(n)

///!
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.
// let isAcronym = function(words, s) {
//     if (words.length !== s.length) {
//         return false;
//     }

//     for (let i = 0; i < words.length; i++) {
//         if (words[i][0] !== s[i]) {
//             return false;
//         }
//     }

//     return true;
// };
// console.log(isAcronym(["an","apple"], "a"));

//!
// You are given a 0-indexed integer array nums and an integer k.

// A subarray is called equal if all of its elements are equal. Note that the empty subarray is an equal subarray.

// Return the length of the longest possible equal subarray after deleting at most k elements from nums.

// A subarray is a contiguous, possibly empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,3,2,3,1,3], k = 3
// Output: 3
// Explanation: It's optimal to delete the elements at index 2 and index 4.
// After deleting them, nums becomes equal to [1, 3, 3, 3].
// The longest equal subarray starts at i = 1 and ends at j = 3 with length equal to 3.
// It can be proven that no longer equal subarrays can be created.
// Example 2:

// Input: nums = [1,1,2,2,1,1], k = 2
// Output: 4
// Explanation: It's optimal to delete the elements at index 2 and index 3.
// After deleting them, nums becomes equal to [1, 1, 1, 1].
// The array itself is an equal subarray, so the answer is 4.
// It can be proven that no longer equal subarrays can be created.
//?
// let longestEqualSubarray = function(nums, k) {
//     let res = nums.filter(el => el !== k)
//     return res.length
// };
// console.log(longestEqualSubarray([1,1,2,2,1,1], 2));

//! Напишите функцию, которая принимает в качестве параметров два целых числа и возвращает значение true (истина), если в числах одинаковое количество цифр; иначе функция возвращает значение false (ложь).
// Пример: func(2398, 19)
// Вывод: false

// function task(sum1, sum2) {
//   let res1 = sum1 + "";
//   let res2 = sum2 + "";
//   return res2.length === res1.length;
// }
// console.log(task(2398, 2398));

//!
// Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет
//  принимать 2 аргумента 1-й сколько всего километров проехали, второй сколько
// понадобилось топлива на это, затем функция должна рассчитать сколько ушло топлива
//  на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'
