(() => {
    const text = document.getElementById("text")
    document.querySelector(".btn").onclick = () => {
        text.classList.toggle("changeStyle")
    }
})()