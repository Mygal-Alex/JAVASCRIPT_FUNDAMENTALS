(() => {
    const regUpper = /^[A-Z]{1}./
    function chekUppercase(st){
        if(regUpper.test(st)){
            console.log("String's starts with uppercase character")
        }
        else{
            console.log("String's not starts with uppercase character")
        }
    }
    chekUppercase("RegExp")
})()