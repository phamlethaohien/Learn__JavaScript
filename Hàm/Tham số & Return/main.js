// Tham số trong hàm
function writeLog() {
    var myString = '';
    for (var param of arguments){
        myString += `${param} - `
    }
    console.log(myString);
};

writeLog('Hi, welcome!', 'Hiii', "Hello");

// Return trong hàm
function cong(a, b) {
    return a + b;
}

var result = cong(3,6);

console.log(result);



