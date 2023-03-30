(() => {
        let circle = document.getElementsByClassName("circle")
        for(let i = 0; i<circle.length; i+=1){
            circle[i].classList.add(circle[i].dataset.anim) 
        }
})()