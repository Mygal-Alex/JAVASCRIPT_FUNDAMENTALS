(() => {
    let taskOutput_6 = document.querySelector(".task-6")
    let today = new Date();
    let now = String(today.toLocaleTimeString());
    console.log(now)
    if(now>"23"&& now<"5"){
        taskOutput_6.innerHTML = "Доброї ночі";
    }
    else if (now>"5" && now< "11"){
        taskOutput_6.innerHTML = "Доброго ранку";
    }
    else if (now>"11" && now<"17"){
        taskOutput_6.innerHTML = "Доброго дня";
    }
    else if (now>"17" && now <"23"){
        taskOutput_6.innerHTML = "Доброго вечора";
    }
})()


