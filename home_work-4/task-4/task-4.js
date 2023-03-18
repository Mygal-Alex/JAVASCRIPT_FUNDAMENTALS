(() => {
    class MonthException{
        constructor(message){
            this.name = message.name
        }
    }
    function showMonthName(month){
        monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        if(month< monthArr.length){
            console.log(monthArr[month-1])
        }
        else{
            const monthException = new MonthException({
                name:"Incorrect month number"
            })
            console.log(monthException)
        }
    }
showMonthName(13)
    })()