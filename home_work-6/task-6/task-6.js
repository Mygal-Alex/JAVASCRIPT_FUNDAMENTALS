(() => {
    const colorsConteiner = document.querySelector(".colors");
    const price = document.getElementById("outprice");
    colorsConteiner.addEventListener("click", (event) => changeColor(event));

    function changeColor(event) {
        if (event.target.classList.contains("color")) {
            const activeColor = document.querySelector(".colors .active");
            activeColor.classList.remove("active");
            event.target.classList.add("active");
            const newPrice = event.target.getAttribute("data-price")
            price.innerHTML = newPrice;

            const activegGadient = document.querySelector(".gradients .second");
            activegGadient.classList.remove("second");
            const gradient = document.getElementsByClassName("gradient")
            for (let i = 0; i < gradient.length; i += 1) {
                if (gradient[i].attributes.color.nodeValue === event.target.attributes.color.nodeValue) {
                    gradient[i].classList.add("second")
                }
            }

            const activeImg = document.querySelector(".show");
            const img = document.getElementsByTagName("img")
            activeImg.classList.remove("show");
            for (let i = 1; i < img.length; i += 1) {
                if (img[i].attributes.color.nodeValue === event.target.attributes.color.nodeValue) {
                    img[i].classList.add("show")
                }
            }
        }
    }
})()
