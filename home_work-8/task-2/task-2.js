(() => {
    const regEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/
    function chekUppercase(email){
        console.log(regEmail.test(email))
    }
    chekUppercase("Qmail2@gmail.com")
})()