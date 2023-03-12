(() => {
    let taskOutput_3 = document.querySelector(".task-3")
    let isAdult = prompt("Скільки вам років ?")
    taskOutput_3.innerHTML= isAdult>=18?  "Ви досягли повнолітнього віку": "Ви ще надто молоді"
})()