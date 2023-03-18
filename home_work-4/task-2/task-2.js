(() => {
    try{
    function checkAge(){
    let name  = prompt("Як вас звати ?");
    let age = prompt("Скільки вам років ?");
    let role =  prompt("Який в вас статус ?");
    let counter = 0;
    let output = document.querySelector(".film")
    if( age>18 && age<70){
        counter+=1
    }
    else if(typeof age !== 'number'){
        throw new Error(alert("Введіть коректне значання вашого віку!!!"))
    }
    else{
        throw new RangeError(alert("Ваш вік відсутній у допустимому діапазоні"))
    }
    if(name.length>0 && age.length>0 && role.length>0){
        counter+=1
    }
    else{
        throw new Error(alert("The field is empty! Please enter your age"))
    }
    if(role==="адмін"||role==="модератор"||role==="користувач"){
        counter+=1
    }
    else{
        throw new EvalError(alert("Нажаль ваша рол не коректна :((("))
    }
    if(counter===3){
        output.innerHTML=`
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/LDU_Txk06tM" title="Noisestorm - Crab Rave [Monstercat Release]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
    }
    }
    }
    catch(err){
        console.error(err)
    }
checkAge()
})()