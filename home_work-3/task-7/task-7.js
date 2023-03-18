(() => {
    const arr = [5, 3, 4, 5,6,7,3];
    function findUnique(arr_){
        let arr2 = [];
        for(let str of arr_){
            if (! arr2.includes(str)) {
                arr2.push(str);
            }
        }
        if((arr.length - arr2.length)===0){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(findUnique(arr))
})()