function simpleNumber(number) {
    let isSimple = true;
    let result;
    if (number > 1 && number <= 1000 && !isNaN(number)) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isSimple = false;
            }
        }
        if (result = isSimple) {
            result = `Число ${number} простое`;
        } else {
            result = `Число ${number} составное`;
        }
    } else if (number === 0 || number === 1) {
        result = `Число ${number} не является составным или простым`
    } else {
        result = "Данные неверны";
    }
    console.log(result);
}
simpleNumber(0);
simpleNumber(1);
simpleNumber(2);
simpleNumber(1000);
simpleNumber(1001);
simpleNumber(13);
simpleNumber(60);