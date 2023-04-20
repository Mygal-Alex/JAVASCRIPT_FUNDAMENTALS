function calcArrProduct(arr){
    return new Promise((resolve,reject)=>{
        let res = 1;
        for(let i = 0; i<arr.length; i+=1){
            if(typeof arr[i]==="number"){
                res*=arr[i];
            }
            else{
                reject("Error! Incorrect array!")
            }
        }
        resolve(res)
    })
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"