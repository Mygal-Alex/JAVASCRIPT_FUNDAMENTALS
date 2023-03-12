(() => {
    let a = Number(prompt("сторона 1")) 
    let b =  Number(prompt("сторона 2")) 
    let c =  Number(prompt("сторона 3"))
    let p = (a+b+c)/2
    let s = Math.sqrt((p*(p - a)*(p - b)*(p - c)))
if (s > 0) {
    if (a*b/2===s || a*c/2===s || b*c/2===s) {
        console.log("Цей трикутник прямокутний")
        console.log("Його площа = "+s.toFixed(3))
    }
    else{
        console.log("Цей трикутник не прямокутний")
        console.log("Його площа = "+s.toFixed(3))
    }
}
else{
    console.log("Incorrect data")
}
})()