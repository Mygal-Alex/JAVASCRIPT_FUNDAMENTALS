(() => {
    function createArray(number){
        let arr_ = [];
        let  getRandomInt = () => Math.floor(Math.random() *500)
        for (let i = 0; i < number; i+=1){
            arr_.push(getRandomInt());
        }
        return arr_
    }
    console.log( createArray(5))
    })()