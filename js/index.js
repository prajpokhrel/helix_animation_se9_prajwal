let animationSpeed = 0.03;
let animationStage = 0;
let maxRadius = 15;
let ballsRows = 10;
let ballsColumns = 20;

let flagsNo = 2;
let frameNo = 0;

const animationArea = {
    canvas: document.querySelector('canvas'),
    start: function() {
        this.canvas.height = 500;
        this.canvas.width = 1000;
        this.context =  this.canvas.getContext('2d');
    }
}


function createCircle(x, y, circleSize) {
    const ctx = animationArea.context;
    ctx.beginPath();
    ctx.arc(x, y, circleSize, 0, 360);
    ctx.fillStyle = '#fdae78';
    ctx.fill();
    ctx.closePath();
}

function drawBalls() {
    animationStage = frameNo * animationSpeed;
    for (let i = 0; i < flagsNo; i++) {
        let flagStage = animationStage + 3.14 + 3.14 * i;

        for (let a = 0; a < ballsColumns; a++) {
            let x = 160 + a * 35;
            let colDist = a * 0.3;

            for (let b = 0; b < ballsRows; b++) {
                let y = 120 + b * 30 + Math.sin(flagStage + colDist) * 50;
                let sizeDist = (Math.cos(flagStage - b / ballsRows + colDist) + 1) * 0.5;
                let circleDimension = sizeDist * maxRadius;
                createCircle(x, y, circleDimension);
            }
        }
    }
}

function animate() {
    frameNo++;
    init();
    drawBalls();
    requestAnimationFrame(animate);
}

function init() {
    animationArea.start();
}

animate();