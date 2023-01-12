const canvas = document.getElementById('canvas1')
const canvasList = document.getElementsByClassName('canvas1')

const ctx = canvas.getContext('2d')

const numberOfParticles = 10
let particlesArray = []
let particlesArray2 = [[], [], []]

const srcArray = [
    'img/sw4.png',
    'img/sw5.png',
    'img/sw6.png'
]

const picImage = new Image()
picImage.src = srcArray[0]
/*
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 70 + 10
        this.speed = Math.random() * 3 + 1
        this.angle = Math.random() * 360
        this.spin = Math.random() < 0.5 ?  -1 : 1
    }
    draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * Math.PI/360 * this.spin)
        ctx.drawImage(picImage, 0 - this.size/2, 0 - this.size/2, this.size, this.size)
        ctx.restore()
    }
    update() {
        this.angle += 2
        if(this.y - this.size > canvas.height) {
            this.y = 0 - this.size
            this.x = Math.random() * canvas.width
            this.size = Math.random() * 70 + 10
            this.speed = Math.random() * 3 + 1
        }
        this.y += this.speed
    }
}
*/
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

function init() {
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < numberOfParticles; j++) {
            particlesArray2[i].push(new Particle(canvasList[i]))
        }
    }
    for (let j = 0; j < numberOfParticles; j++) {
        particlesArray.push(new Particle(canvas))
    }
}
init()

function animate2(canny) {
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < particlesArray2[i].length; j++) {
            particlesArray2[i][j].ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    for (let i = 0; i < particlesArray2.length; i++) {
        for (let j = 0; j < particlesArray2[i].length; j++) {
            
            particlesArray2[i][j].draw()
        
            particlesArray2[i][j].update()
            
        }
    }
    requestAnimationFrame(animate2)
}

function animate(canny) { 
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    for (let i = 0; i < particlesArray.length; i++) {
        
        particlesArray[i].draw()
        
        particlesArray[i].update()
    }
    requestAnimationFrame(animate)
}

animate2()
// animate2()