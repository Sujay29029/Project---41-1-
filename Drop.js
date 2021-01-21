class Drop {

    constructor(x, y) {
        this.body.circle(x, y, r);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)})
        }
    }

    drawEllipse(){}

}