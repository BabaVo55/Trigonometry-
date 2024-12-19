const myCanvas = document.getElementById('canvas')
const ctx = myCanvas.getContext("2d")

//Global Variables

const A = {
    x : 0,
    y : 0
}

const B = {
    x : 90,
    y : 120
}

const C = {
    x: B.x,
    y: 0
}

const color = {
    A: 'red',
    B: 'blue',
    C: 'green'
}

const offset = {
    x:myCanvas.width/2,
    y:myCanvas.height/2
}

///             --------------------------

ctx.translate(offset.x, offset.y)



update()


//Update is run again on every movement
document.onmousemove=(event)=>{
    B.y = event.y - offset.y
    B.x = event.x - offset.x
    C.x = B.x;

    update()
}

///  -------------------------

function update(){

    const a = distance(B,C);
    const b = distance(A,C);
    const c = distance(A,B);

    // const sin=a/c;
    const theta = Math.asin(Sin(a,c))
    
    ctx.clearRect(-offset.x, -offset.y,
        myCanvas.width, myCanvas.height
    )
    
    function Sin(p1,p2){
        return p1/p2
    }

    const thetaA = Sin(a,c)
    const thetaB = Sin(b,c)
    const thetaC = Sin(a,b)
    
    drawCoordinateSystem(ctx, offset)
    
    drawText("sin = a % c = "+Sin(a,c).toFixed(3), {x:-offset.x/2, y:offset.y*0.7})
    drawText("theta:"+thetaC.toFixed(3)+" ("+ Math.round(toDeg(theta)).
    toString().padStart(2, " ") + "°)", {x:offset.x/2, y:offset.y*0.7})

    drawPoint(A,A, 15, 'black')
    drawPoint(B,B, 15, 'black')
    drawPoint(C,C, 15, 'black')
    
    drawLine(A, B, 'red')
    drawText("c:"+Math.round(c), average(A,B), color.A)
    drawLine(A, C, 'red')
    drawText("b:"+Math.round(b), average(A,C), color.B)
    drawLine(B, C, 'red')
    drawText("a:"+Math.round(a), average(B,C), color.C)
    
    drawText("A", A)
    drawText("B", B)
    drawText("C", C)

    // drawArch(A,C, thetaA)
    // drawArch(A,C, thetaB)
    // drawArch(A,B, thetaC)

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    const start = B.x > A.x?0:Math.PI;
    const clockwise=B.y<C.y^B.x>A.x;
    let end = B.y < A.y? theta:theta
    if (B.x<A.x){
        end=Math.PI-end
    }
    ctx.arc(0,0,20,start,end, !clockwise)
    ctx.stroke()

    

    // drawText("0", A)
}

function toDeg(rad){
    return rad*180/Math.PI;
}

function average(p1, p2){
    return {
        x:(p1.x+p2.x)/2,
        y:(p1.y+p2.y)/2
    };
}



function distance(p1, p2){
    return Math.hypot(p1.x-p2.x,p1.y-p2.y); 
}

function drawPoint(x,y, size, color){   
    ctx.beginPath()
    ctx.fillStyle=color;
    ctx.arc(x.x, y.y, size, 0, Math.PI*2);
    ctx.fill();
}


function drawCoordinateSystem(ctx, offset){
    ctx.beginPath();
    ctx.moveTo(-offset.x,0)
    ctx.lineTo(ctx.canvas.width - offset.x, 0)
    ctx.moveTo(0,-offset.y)
    ctx.lineTo(0,ctx.canvas.height-offset.y)
    ctx.setLineDash([4,2])
    ctx.lineWidth= 1;
    ctx.strokeStyle="gray";
    ctx.stroke()
    ctx.setLineDash([]);
}


function drawText(letter, position, color='black'){
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.color='black'
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.font="bold 18px Courier";
    ctx.strokeStyle='white';
    ctx.lineWidth='7';
    ctx.strokeText(letter, position.x, position.y);
    ctx.fillText(letter, position.x, position.y);
}


function drawLine(pointFrom, pointTo, color){
    ctx.beginPath()
    ctx.moveTo(pointFrom.x, pointFrom.y)
    ctx.lineTo(pointTo.x, pointTo.y)
    ctx.fillStyle=color
    ctx.lineWidth = 2
    ctx.stroke()
}

function drawArch(pointFrom, pointTo, angle){
    ctx.beginPath();
    // ctx.moveTo(pointFrom.x, pointFrom.y)
    ctx.arc(angle/2, angle/2 , angle, pointFrom, pointTo)
    // ctx.lineTo(pointTo.x, pointTo.y)
    ctx.pathStyle='black';
    ctx.lineWidth = 1;
    ctx.stroke()
}

// function drawText(position, letter){
//     ctx.beginPath();
//     ctx.fillStyle='black';
//     ctx.textAlign='center';
//     ctx.textBaseline='middle';
//     ctx.font="bold 13px Courier";
//     ctx.fillText(letter, position.x, position.y)

// //Test
//     // if (position.x === 0){
//     //     ctx.translate(100, 0)
//     // }
//     // if (position.y === 0){
//     //     ctx.translate(0, 100)
//     // }
// }

//Test custom Triangle
// ctx.beginPath();
// ctx.moveTo(20,20);
// ctx.lineTo(100,10)
// ctx.moveTo(100, 10);
// ctx.lineTo(50,2)
// ctx.moveTo(50, 2);
// ctx.lineTo(20,20)
// ctx.stroke()


// TEST!!!!
// ctx.beginPath()
// ctx.moveTo(A.x, A.y)
// ctx.lineTo(B.x, B.y)
// ctx.stroke()


//THEORY -> will finish later
//let Data = [
    //         {A : {
    //         x : 0,
    //         y : 0
    //         }
    //     },
        
    //     {    B : {
    //         x : 90,
    //         y : 120
    //         }
    //     },
        
    //     {    C : {
    //         x: B.x,
    //         y: 0
    //         }
    //     },
        
    //     {    color : {
    //         A: 'red',
    //         B: 'blue',
    //         C: 'green'
    //         }
    //     },
        
    //     {    offset : {
    //         x:myCanvas.width/2,
    //         y:myCanvas.height/2
    //         }
    //     }
    // ]