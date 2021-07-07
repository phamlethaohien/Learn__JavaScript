var languages = [
    'JavaScript',
    'C++',
    'Ruby',
    // null,
    // {},
    // function() {
        
    // },
    // 123
];

console.log(languages);

console.log(languages.length);

console.log(languages[2]);


// To String
console.log(languages.toString());

// Join
console.log(languages.join(', '));

// Pop (xóa đi phần tử cuối mảng và trả lại chính phần tử đã xóa)
console.log(languages.pop());

console.log(languages);
// Push
console.log(languages.push('Bootstrap', 'Java'));
console.log(languages);

// Shift (xóa đi phần tử đầu mảng và trả lại chính phần tử đã xóa)
console.log(languages.shift());
console.log(languages);

// Unshift
console.log(languages.unshift('Dart'));
console.log(languages);

// Spilicing
languages.splice(1, 1);

console.log(languages);

// Concat (hợp nhất)
languages2 = [
    'C++',
    'Bootstrap'    
];

console.log(languages.concat(languages2));

// Slicing
console.log(languages.slice(1, 3));

