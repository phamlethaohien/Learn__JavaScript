var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C';

console.log(result);

if (result) {
    console.log('Dung');
} else {
    console.log('Sai');
}


var result2 = null || 'B' || 'C';

console.log(result2);

if (result2) {
    console.log('Dung');
} else {
    console.log('Sai');
}

