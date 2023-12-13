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
    ctx.moveTo(10, 70);//moveTo (x,y ) starting poinyt of line
    ctx.lineTo(30, 70) //lineTo (x,y ) ending poinyt of line
    ctx.strokeStyle = "black" //color of line
    ctx.lineWidth = 8
    ctx.stroke()// draw line

    // how to draw conplex lines zigzag lines
    // ctx.beginPath();//reset the context state
    // ctx.moveTo(30, 30);//moveTo (x,y ) starting poinyt of line
    // ctx.lineTo(80, 80) //lineTo (x,y ) ending poinyt of line
    // ctx.strokeStyle = "purple" //color of line
    // ctx.lineWidth = 3
    // ctx.stroke()// draw line

    // ctx.beginPath();//reset the context state
    // ctx.moveTo(80, 80);//moveTo (x,y ) starting poinyt of line
    // ctx.lineTo(130, 30) //lineTo (x,y ) ending poinyt of line
    // ctx.strokeStyle = "pink" //color of line
    // ctx.stroke()// draw line

    // ctx.beginPath();//reset the context state
    // ctx.moveTo(130, 30);//moveTo (x,y ) starting poinyt of line
    // ctx.lineTo(180, 80) //lineTo (x,y ) ending poinyt of line
    // ctx.strokeStyle = "red" //color of line
    // ctx.stroke()// draw line


    let x = 10
    for (let i = 0; i < 5; i++) {

        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 30);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 90) //lineTo (x,y ) ending poinyt of line
        ctx.lineWidth = 3;
        ctx.strokeStyle = "red" //color of line
        ctx.stroke()// draw line
       // ---------------------------------------
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 90);//moveTo (x,y ) starting poinyt of line
        x=x + 50
        ctx.lineTo(x , 30) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "purple" //color of line
        ctx.stroke()// draw line

    }



})