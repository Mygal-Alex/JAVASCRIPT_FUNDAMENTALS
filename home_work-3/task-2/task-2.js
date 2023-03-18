(() => {
function createArray(start, end){
    let arr_ = [];
    let arrLength =  end - start
    arr_.push(start)
    for (let i = 0; i <= arrLength-1; ++i){
        arr_.push(start+=1);
    }
    return arr_
}
let arr = createArray(2, 9);
console.log(arr);
})()