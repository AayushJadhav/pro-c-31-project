class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            isStatic: false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.colour = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};