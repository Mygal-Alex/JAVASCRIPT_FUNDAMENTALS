(() => {
    document.querySelector(".btn").onclick = () => {
        let el = document.getElementsByClassName("arr")
        let count = 0;
        let data = []
        let out = document.querySelector(".out")
        for(let i = 0; i<el.length; i+=1){
            if (el[i].value.length>0){
                count+=1
                data.push(el[i].value)
            }
        }
        data = data.toString();
        data = data.replace(/,/gi, '<br>');
        out.innerHTML = count===4? data : "Вкажіть всі данні!!!"
    }
})()