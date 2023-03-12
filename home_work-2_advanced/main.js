(() => {
    document.querySelector(".btn_1").addEventListener('click', () =>{
        let inputMoney_1 = Number(document.querySelector(".input-money-1").value)
        let inputBeLate_1= Number(document.querySelector(".input-be_late-1").value)
        let output_1 =document.querySelector(".output_1")
        let quantity = Math.ceil(((inputMoney_1 + 20*Math.trunc(inputBeLate_1/3))*2)/100)*100
        output_1.innerHTML = "Тобі треба написати : "+ quantity+" Рядків"
    })
    document.querySelector(".btn_2").addEventListener('click', () =>{
        let inputQuantity_2 = Number(document.querySelector(".input-quantity-2").value)
        let inputMoney_2= Number(document.querySelector(".input-money-2").value)
        let output_2 =document.querySelector(".output_2")
        let calc_2 = (((Math.floor(inputQuantity_2/100))*100)/2 - inputMoney_2)
        console.log(calc_2)
        let res_2 = calc_2 >0 ?  output_2.innerHTML = "Ти можеш запізнитися : "+((Math.floor(calc_2/20))*3+2) + " рази" : output_2.innerHTML = "Треба більше працювати("
    })
    document.querySelector(".btn_3").addEventListener('click', () =>{
        let inputQuantity_3 = Number(document.querySelector(".input-quantity-3").value)
        let inputBeLate_3= Number(document.querySelector(".input-be_late-3").value)
        let output_3 =document.querySelector(".output_3")
        let calc_3 = (((Math.floor(inputQuantity_3/100))*100)/2 - 20*(Math.trunc(inputBeLate_3/3)))
        let res_3 = calc_3 >0 ? output_3.innerHTML = "Твій заробіток становить : " + calc_3 + " $": output_3.innerHTML = "Треба більше працювати і менше запізнюватися("
        
    })
})()