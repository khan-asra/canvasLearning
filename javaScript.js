//defination
window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');


    //Blue rectangle 
    ctx.fillStyle = "blue"
    ctx.fillRect(10, 40, 30, 70);

    //Blue rectangle 
    ctx.fillStyle = "yellow"
    ctx.fillRect(20, 80, 30, 70);

    // green
    ctx.fillStyle = "green"
    ctx.fillRect(30, 50, 30, 70);

    //draw lines
    ctx.beginPath();//reset the context state
    ctx.moveTo(30,70);//moveTo (x,y ) starting poinyt of line
    ctx.lineTo(80,70) //lineTo (x,y ) ending poinyt of line
    ctx.strokeStyle = "pink" //color of line
    ctx.lineWidth  = 8
    ctx.stroke()// draw line

    // how to draw conplex lines
    
})