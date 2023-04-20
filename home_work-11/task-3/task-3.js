new Promise(function (resolve, reject) {
    let number = prompt("Введіть число:")
    if(isNaN(number)){
        reject("Введено не число!")
    }
    else{
        resolve(Number(number))
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        let number
        do {
            number = prompt("Введіть число:")
        } while (isNaN(number));
        resolve(Number(number))
    });
}).then(function (result) {
    console.log(result)
});