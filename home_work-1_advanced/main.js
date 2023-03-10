document.querySelector(".btn").addEventListener('click', () =>{
    let i = document.querySelector(".input").value;
    if (!(i%2===0) && !((i+1)%3===0)){
        document.querySelector(".output_1").innerHTML = "низ класик";
    }
    else if(i%2===0 && !(i%3===0)){
        document.querySelector(".output_1").innerHTML = "верх класик";
    }
    else if(!(i%2===0) && (i+1)%3===0){
        document.querySelector(".output_1").innerHTML = "низ боковуха";
    }
    else if(i%2===0 && i%3===0){
        document.querySelector(".output_1").innerHTML = "верх боковуха";
    }
    document.querySelector(".output_2").innerHTML = Math.ceil(i/6);
})
