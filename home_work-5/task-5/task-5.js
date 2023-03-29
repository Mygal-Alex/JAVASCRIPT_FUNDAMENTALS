(() => {
    class Worker{
        constructor(fullName,dayRate,workingDays){
            this.fullName = fullName
            this.dayRate = dayRate
            this.workingDays = workingDays
            this.experience = 1.2
        }
        showSalary(){
            this.salary = this.dayRate * this.workingDays
        }
        showSalaryWithExperience(){
            this.salaryWithExperience = this.salary*this.experience
        }
        get Exp(){
            return this.experience
        }
        set setExp(newexp){
            this.experience = newexp;
        }
    }
    let worcer_1 = new Worker("John Johnson", 10, 200)
    worcer_1.showSalary()
    worcer_1.showSalaryWithExperience()
    console.log(worcer_1)
    let worcer_2 = new Worker("Tom Tomson", 10, 200)
    worcer_2.setExp = 1.5
    worcer_2.showSalary()
    worcer_2.showSalaryWithExperience()
    console.log(worcer_2)
})()