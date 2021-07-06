var myString = '     Hom nay hoc ve Chuoi trong JS - Lam viec voi Chuoi'

// 1. Length
console.log(myString.length);

// 2. Find Index
console.log(myString.indexOf('Chuoi' , 16)); // Quy định đc vị trí bắt đầu tìm kiếm
console.log(myString.search('Lam'));

// 3. Cut String
console.log(myString.slice(23));

// 4. Replace
console.log(myString.replace('JS', 'JavaScript'));

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim().length);

// 8. Split // Tach thanh 1 chuoi Array
var languages = 'JavaScrip, Ruby, C++';

console.log(languages.split(', '));

var fruit = 'Blueberry';

console.log(fruit.split(''));

// 9. Get a character by index
console.log(myString.charAt(10));

console.log(myString[5]);



