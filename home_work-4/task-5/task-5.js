(() => {
    function showUser(id){
        if(id >0){
            const value_ = Object.create({},{
                id:{
                    value: id
                }
            })
            return value_
        }
        else if(id<0){
            console.error(`ID must not be negative: ${id}`)
        }
    }
    function showUsers(ids){
        let ibsArr = []
        for(let i of ids){
            if (typeof showUser(i)=== "object") { 
                ibsArr.push(showUser(i));
            }
        }
        return ibsArr
    }
    console.log(showUsers([1, 2,-2, 3, 4, 66, 22, 72]))
    })()