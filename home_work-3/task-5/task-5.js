(() => {
    let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
    function sortArray(arr_){
        let arrNumbers = [];
        let arrText = [];
        for(let value of arr_){
        if (typeof value === 'number'){
            arrNumbers.push(value);
        }
        else if (typeof value === 'string'){
            arrText.push(value);
        }
        else if (typeof value === 'object'){
            for(let nestedValue of value){
                if (typeof nestedValue === 'number'){
                    arrNumbers.push(nestedValue);
                }
                else if (typeof nestedValue === 'string'){
                    arrText.push(nestedValue);
                }
            }
        }
        }
        console.log(arrNumbers)
        console.log(arrText)
    }
    sortArray(arr)
    })()