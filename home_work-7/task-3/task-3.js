(() => {
    const BGcolor = document.body
    document.querySelector(".btn_blue").onclick = () => {
        BGcolor.classList.remove("BG_pink")
        BGcolor.classList.add("BG_blue")
    }
    const btn_pink = document.querySelector(".btn_pink")
        btn_pink.addEventListener("dblclick", (e) => {
            BGcolor.classList.remove("BG_blue")
            BGcolor.classList.add("BG_pink")
    });
    const btn_brown = document.querySelector(".btn_brown")
    btn_brown.addEventListener("mousedown", (e) => {
        BGcolor.classList.remove("BG_blue")
        BGcolor.classList.remove("BG_pink")
        BGcolor.classList.add("BG_brown")
    });
    btn_brown.addEventListener("mouseup", (e) => {
        BGcolor.classList.remove("BG_brown")
    })
    const cat_link = document.querySelector(".cat_link")
    cat_link.addEventListener("mouseenter", (e) => {
        BGcolor.classList.remove("BG_blue")
        BGcolor.classList.remove("BG_pink")
        BGcolor.classList.add("BG_yellow")
    });
    cat_link.addEventListener("mouseleave", (e) => {
        BGcolor.classList.remove("BG_blue")
        BGcolor.classList.remove("BG_pink")
        BGcolor.classList.remove("BG_yellow")
    });
})()