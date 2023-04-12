const $checkboxses = $('input[type="checkbox"]')
$checkboxses.on('change' ,function(){
    const check = $('input[type="checkbox"]:checked');
    if(check.length >=3){
        $checkboxses.prop('disabled', true)
    }
});