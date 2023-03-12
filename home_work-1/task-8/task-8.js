(() => {
    let secondsInHour = document.querySelector(".hour");
    let secondsInDay = document.querySelector(".day");
    let secondsInMonth= document.querySelector(".month");
    secondsInHour.innerHTML = 60*60
    secondsInDay.innerHTML = 60*60*24
    secondsInMonth.innerHTML = 60*60*24*30
})()

