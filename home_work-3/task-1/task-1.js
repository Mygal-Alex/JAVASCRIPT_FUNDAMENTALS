(() => {
    const arr = [5, 3, 4, 5,6,7,3];
    function compact(arr_){
        let arr2 = [];
        for(let str of arr_){
            if (! arr2.includes(str)) {
                arr2.push(str);
            }
        }
        return arr2
    }
    const arr2 = compact(arr);
    console.log(arr2); 
})()