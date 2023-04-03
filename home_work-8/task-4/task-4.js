(() => {
    const regCard = /(\d{4}(-|\s)\d{4}(-|\s)\d{4})(-|\s)\d{4}/
    function cardVal (number){
        if(regCard.test(number)){
            console.log("Card number is correct")
        }
        else{
            console.log("Card number is incorrect")
        }
    }
    cardVal("9999-9999-9999-9999")
})()