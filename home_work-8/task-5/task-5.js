(() => {
    const regEmail = /^[\dA-Za-z]{1}[\dA-Za-z_]+[_-]?[0-9A-Za-z_]+@[\dA-Za-z_]+[_-]?[0-9A-Za-z_]+\.[\dA-Za-z]+$/
    function checkEmail(email){
        if(regEmail.test(email)){
            console.log("Email is correct!")
        }
        else{
            console.log("Email is not correct!")
        }
    }
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');
})()