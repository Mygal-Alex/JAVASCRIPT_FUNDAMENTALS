(() => {
    class Circle{
        constructor(x, y, R){
            this.x = x;
            this.y = y;
            this.R = R;
        }
        circlelength (){
            this.L= 2* Math.PI*this.R
        }
        static circlelength_static (R){
            this.L= 2* Math.PI*R
            return this.L
        }
        replicaCircle(){
            Circle
        }
        static replicaCircle_static(x,y,R){
            return new Circle(x,y,R)
        }
        pointInCircle(Xn, Yn){
            if(Math.sqrt(Math.pow(Xn-this.x, 2)+Math.pow(Yn-this.y, 2))<this.R){
                console.log("Точка лежить в колі")
            }
            else{
                console.log("Точка не лежить в колі")
            }
        }
    }
    let circle_1 = new Circle(1,2,4);
    circle_1.circlelength();
    console.log(circle_1)
    let circle_2 = Circle.circlelength_static(4);
    console.log(circle_2);
    let circle_3 = new Circle(4,1,2);
    circle_3.replicaCircle()
    console.log(circle_3)
    let circle_4 = Circle.replicaCircle_static(5,2,6);
    console.log(circle_4)
    let circle_5 = new Circle(1,1,5);
    circle_5.pointInCircle(2,3);
    let circle_6 = new Circle(4,1,2);
    console.log(circle_6.toString())
    })()