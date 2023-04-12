const $cont = $("h3 + div");
$cont.each(function(){
    $(this).insertBefore($(this).prev("h3"));
});