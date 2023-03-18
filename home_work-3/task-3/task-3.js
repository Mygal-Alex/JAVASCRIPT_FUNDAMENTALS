(() => {
    function showValue(start, end){
        let arr_ = [];
        let arrLength =  end - start
        arr_.push(start)
        for (let i = 0; i <= arrLength-1; ++i){
            start+=1
            for(let f = 0; f<=i+1; ++f){
                arr_.push(start)
            }
        }
        return arr_
    }
    let arr = showValue(1, 4);
    console.log(arr);
    })()