(() => {
    function calcRectangleArea(width, height){
        if(typeof width === 'number'&& typeof height === 'number'){
            let area = width*height
            console.log(area)
        }
        else{
            console.error("Переданні значення не є числами!!!")
        }
    }
    calcRectangleArea(2,1)
    })()