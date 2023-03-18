(() => {
    let a = Number(prompt("Перше значення"));
    let b = Number( prompt("Друге значення"));
    let op = Number( prompt("Код операції"));
    function calc(firstValue, secondValue, operation){
        if(operation===1){
            console.log(firstValue - secondValue);
        }
        else if(operation===2){
            console.log(firstValue * secondValue);
        }
        else if(operation===3){
            console.log(firstValue / secondValue);
        }
        else{
            console.log(firstValue + secondValue);
        }
    }
    calc(a, b, op)
})()