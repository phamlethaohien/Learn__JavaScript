/** LOGICAL
 * 1. && - And
 * 2. || - Or
 * 3. !  - Not
 * */ 

var a = 1;
var b = 2;
var c = 3;

if (a < 0 && b > 0 || c > 0) {
    console.log('Right');
} else {
    console.log('Wrong');
}

var x = 1;

if (!(x < 0)) {
    console.log('Yes');
}

