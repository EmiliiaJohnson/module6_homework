function getNumber (x) {
    return function (y) {
        return x + y;
    }
}
let x = 10;
let y = 23;
console.log(getNumber(x)(y));