(() => {
    window.addEventListener('resize', update);
    const coordinates = document.querySelector(".task-6");
    update()
    function update(){
        coordinates.innerHTML = `Width: ${window.innerWidth} Height: ${window.innerHeight} `
    }
})()