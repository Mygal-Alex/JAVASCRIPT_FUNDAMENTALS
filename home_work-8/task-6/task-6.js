(() => {
    const regLog =/^[A-Za-z]{1}[\dA-Za-z.,]{1,9}$/
    const regNum = /[0-9]*[.,]?[0-9]+/g
    function chekLogNum (log_){
        if(regLog.test(log_)){
            console.log(log_.match(regNum))
        }
    }
    chekLogNum("ee1.1ret3")
})()