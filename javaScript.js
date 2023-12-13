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
    ctx.lineWidth = 3
    ctx.stroke()// draw line
    ctx.lineCap = "round"

    // how to draw conplex lines zigzag lines

    let x = -1
    for (let i = 0; i < 5; i++) {

        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 30);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 90) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "pink" //color of line
        ctx.stroke()// draw line
        //---------------------------------------
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 90);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 30) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "pink" //color of line
        ctx.stroke()// draw line

    }

    x = -5
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 30);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 90) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "purple" //color of line
        ctx.moveTo(x, 90);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 30) //lineTo (x,y ) ending poinyt of line
        ctx.stroke()// draw line

    }
    x = -10
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 30);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 90) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "#601ca4" //color of line
        ctx.moveTo(x, 90);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 30) //lineTo (x,y ) ending poinyt of line
        ctx.stroke()// draw line

    }

    let y = 50
    let cap =["round", "butt","square","butt","round"]
    let colour =["red","blue","green", "purple", "orange"]
    for (let i = 0; i < 5; i++) {
      
    ctx.beginPath();//reset the context state
    ctx.strokeStyle = colour[i] //color of line
    ctx.moveTo(90, y);//moveTo (x,y ) starting poinyt of line
    ctx.lineTo(200, y) //lineTo (x,y ) ending poinyt of line
    ctx.lineWidth = 4
    ctx.lineCap = cap[i]
    ctx.stroke()// draw line

    y=y+15
        
    }





})