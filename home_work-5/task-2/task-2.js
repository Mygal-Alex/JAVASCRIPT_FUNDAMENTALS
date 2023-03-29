(() => {
    let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development" 
    };
    function propsCount (obg){
        console.log(Object.keys(obg).length)
    }
propsCount(mentor);
})()