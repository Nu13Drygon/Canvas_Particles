
const canvasList = document.getElementsByClassName('canvas1')
let canvasLength = canvasList.length


const numberOfParticles = 10

let particlesArray2 = []

for (let i = 0; i < canvasLength; i++) {
    particlesArray2.push([])
}

const srcArray = [
    'img/sw4.png',
    'img/sw5.png',
    'img/sw6.png'
]

const picImage = new Image()
picImage.src = srcArray[1]


class Particle {
    constructor(canny) {
        this.canvas = canny;
        this.ctx = this.canvas.getContext('2d');
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 70 + 10;
        this.speed = Math.random() * 3 + 1;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ?  -1 : 1;
    }
    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.angle * Math.PI/360 * this.spin);
        this.ctx.drawImage(picImage, 0 - this.size/2, 0 - this.size/2, this.size, this.size);
        this.ctx.restore();
    }
    update() {
        this.angle += 2
        if(this.y - this.size > this.canvas.height) {
            this.y = 0 - this.size
            this.x = Math.random() * this.canvas.width
            this.size = Math.random() * 70 + 10
            this.speed = Math.random() * 3 + 1
        }
        this.y += this.speed
    }

}

init()
animate()


function init() {
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < numberOfParticles; j++) {
            particlesArray2[i].push(new Particle(canvasList[i]))
        }
    }
}


function animate() {
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < particlesArray2[i].length; j++) {
            particlesArray2[i][j].ctx.clearRect(0, 0, particlesArray2[i][j].canvas.width, particlesArray2[i][j].canvas.height)
        }
    }
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < particlesArray2[i].length; j++) {
            
            particlesArray2[i][j].draw()
            
            particlesArray2[i][j].update()
            
        }
    }
    requestAnimationFrame(animate)
}

