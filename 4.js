function printNumbers (a, b) {
    const numbersQueue = setInterval(function() {
        console.log(a);
        if (a === b) {
            clearInterval(numbersQueue);
        }
        a++;
    }, 1000);
}
printNumbers(5, 15);
