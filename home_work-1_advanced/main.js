document.querySelector(".btn").addEventListener('click', () =>{
    let i = document.querySelector(".input").value;
    if (!(i%2===0) && !((i+1)%3===0)){
        document.querySelector(".output_1").innerHTML = "Ваше місце: Класичне знизу";
    }
    else if(i%2===0 && !(i%3===0)){
        document.querySelector(".output_1").innerHTML = "Ваше місце: Класичне зверху";
    }
    else if(!(i%2===0) && (i+1)%3===0){
        document.querySelector(".output_1").innerHTML = "Ваше місце: Бокове знизу";
    }
    else if(i%2===0 && i%3===0){
        document.querySelector(".output_1").innerHTML = "Ваше місце: Бокове зверху";
    }
    document.querySelector(".output_2").innerHTML = "№ Вашого купе :"+Math.ceil(i/6);
})
