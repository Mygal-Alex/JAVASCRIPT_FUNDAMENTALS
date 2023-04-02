(() => {
    const out = document.querySelector(".out");
    const btn = document.querySelector(".btn")
    btn.onclick = () => {
    out.innerText = "I was pressed!"
    }
    btn.addEventListener("mouseenter", (e) => {
        out.innerText = "Mouse on me!"
    });
    btn.addEventListener("mouseleave", (e) => {
        out.innerText = "Mouse is not on me!"
    });
})()