const myCanvas = document.getElementById('canvas')
const ctx = myCanvas.getContext("2d")



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
ctx.translate(offset.x, offset.y)

drawPoint(A,A, 20, color.B)
drawPoint(B,B, 10, color.C)
drawPoint(C,C, 5, color.A)

update()

document.onmousemove=(event)=>{
    B.y = event.y - offset.y
    B.x = event.x - offset.x
    C.x = B.x;

    update()
}

function update(){
    ctx.clearRect(-offset.x, -offset.y,
        myCanvas.width, myCanvas.height
    )
    
    drawCoordinateSystem(ctx, offset)
    
    drawText(A, "A")
    drawText(B, "B")
    drawText(C, "C")
    
    drawBetweenPoints(A, B)
    drawBetweenPoints(B, C)
    drawBetweenPoints(C, A)
}







function drawText(position, letter){
    ctx.beginPath();
    ctx.fillStyle='black';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.font="bold 13px Courier";
    ctx.fillText(letter, position.x, position.y)

//Test
    // if (position.x === 0){
    //     ctx.translate(100, 0)
    // }
    // if (position.y === 0){
    //     ctx.translate(0, 100)
    // }
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

function drawBetweenPoints(pointFrom, pointTo){
    ctx.beginPath()
    ctx.moveTo(pointFrom.x, pointFrom.y)
    ctx.lineTo(pointTo.x, pointTo.y)
    ctx.stroke()
}



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