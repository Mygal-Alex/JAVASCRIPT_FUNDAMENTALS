(() => {
    let secondsInHour_output = document.querySelector(".hour");
    let secondsInDay_output = document.querySelector(".day");
    let secondsInMonth_output= document.querySelector(".month");
    let second = 1;
    let secondsInMinute =  second*60;
    let secondsInHour= secondsInMinute*60;
    let secondsInDay =  secondsInHour*24;
    let secondsInMonth =  secondsInDay*30;
    secondsInHour_output.innerHTML = secondsInHour;
    secondsInDay_output.innerHTML =  secondsInDay;
    secondsInMonth_output.innerHTML = secondsInMonth;
})()

