(() => { 
    document.querySelector(".btn").onclick = () => {
        let select = document.getElementById('select_')
        let el = document.getElementsByTagName("option")
        for(i=0; i<el.length; i+=1){
            if(select.value === el[i].id){
                el[i].remove()
            }
        }
    }
})()