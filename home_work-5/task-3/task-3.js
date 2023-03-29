(() => {
    class Person{
        constructor(name,surname){
            this.name = name;
            this.surname = surname;
        }
        showFullName(){
            console.log(this.name+" "+this.surname)
        }
    }
    let persone_1 = new Person("Alex", "Mygal");
    persone_1.showFullName()
    class Student extends Person{
        constructor(name,surname,year){
            super(name,surname);
            this.year=year
        }
        showFullName(midleName){
            this.midleName = midleName;
            console.log(midleName)
        }
        showCourse(){
            let today = new Date(); 
            let year = today.getFullYear();
            this.course = year - this.year
            console.log(this.course)
        }
    }
    let student_1 = new Student("Alex", "Mygal", 2021)
    student_1.showFullName("Sergeevich")
    student_1.showCourse();
    console.log(student_1)

})()