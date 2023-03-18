(() => {
    function sumSliceArray(arr, first, second){
        if(first > arr.length || second > arr.length ){
        console.error("елемент по такому індексу не знайдено!!!")
        }
        else if ( typeof arr[first] !== 'number' ||  typeof arr[second] !== 'number'){
        console.error("Вказанний елемент масиву не є числом!!!")
        }
        else{
            console.log(`Сумма елементів масива за індексами : ${first}, та: ${second} = ${arr[first]+arr[second]}`)
        }
    }
    sumSliceArray(["1",8,93,77,2,], 2 , 3)
    })()