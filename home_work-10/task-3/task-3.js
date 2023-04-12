function mul(...args) {
    let res = 1;
    let IncludeNumber = false
    for(let arg of args){
        if(typeof arg === "number"){
            res *=arg
            IncludeNumber = true
        }
    }
    if(IncludeNumber === true){
        return res
    }
    else{
        return 0 
    }
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));