(() => { 
        const selectCountry = document.getElementById('country');
        const selectCities = document.getElementById('cities');
        const optionsCountry = document.getElementsByClassName("opt_1");
        const optionsCities = document.getElementsByClassName("opt_2")
        let out = document.querySelector(".out")
        selectCountry.onclick = () =>{
            switch (selectCountry.value){
                case "ger":
                    selectCities.innerHTML = `
                    <option value="stu" class="opt_2">Stuttgart</option>
                    <option value="mun" class="opt_2">Munich</option>
                    <option value="ber" class="opt_2">Berlin</option>`
                break;
                case "usa":
                    selectCities.innerHTML = `                   
                    <option value="tex" class="opt_2">Texas</option>
                    <option value="oh" class="opt_2">Ohio</option>
                    <option value="vir" class="opt_2">Virginia</option>`
                break;
                case "ukr":
                    selectCities.innerHTML = `
                    <option value="ky" class="opt_2">Kyiv</option>
                    <option value="lv" class="opt_2">Lviv</option>
                    <option value="dn" class="opt_2">Dnipro</option>`
                break;
            }
            selectCities.onclick = () =>{
                out.innerHTML = `<p> Країна: ${optionsCountry[selectCountry.selectedIndex].textContent} Місто: ${optionsCities[selectCities.selectedIndex].textContent}</p>`
            }
        }
})()