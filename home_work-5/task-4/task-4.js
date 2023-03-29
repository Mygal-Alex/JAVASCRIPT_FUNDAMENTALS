(() => {
    class Marker{
        constructor (color, wear){
            this.color = color;
            this.wear = wear;
        }
        drawMarker(str){
            let output = document.querySelector(".task-4")
            let style = output.style;
            style.color = this.color
            let counter = 0;
            for(let i= this.wear; i>0.5; i-=0.5){
                counter +=1
            }
            let strDraw = str.substring(0,counter)
            output.innerHTML=strDraw
        }
    }
    let marcer_1 = new Marker("Red", 10);
    marcer_1.drawMarker("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    class RecoveryMarker extends Marker{
        constructor(color, wear){
            super(color, wear);
        }
        refuelMarker(){
            this.wear = 100;
        }
    }
    let marcer_2 = new RecoveryMarker("Red", 10);
    marcer_2.refuelMarker()
    console.log(marcer_2)
})()