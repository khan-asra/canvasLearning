//defination
window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');


    //Blue rectangle 
    ctx.fillStyle = "blue"
    ctx.fillRect(3, 40, 20, 50);

    //Blue rectangle 
    ctx.fillStyle = "yellow"
    ctx.fillRect(6, 80, 20, 50);

    // green
    ctx.fillStyle = "green"
    ctx.fillRect(9, 50, 20, 50);

    //draw lines
    ctx.beginPath();//reset the context state
    ctx.moveTo(10, 70);//moveTo (x,y ) starting poinyt of line
    ctx.lineTo(30, 70) //lineTo (x,y ) ending poinyt of line
    ctx.strokeStyle = "black" //color of line
    ctx.lineWidth = 1
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

    let y = 120
    let cap = ["round", "butt", "square", "butt", "round"]
    let colour = ["red", "blue", "green", "purple", "orange"]
    for (let i = 0; i < 5; i++) {

        ctx.beginPath();//reset the context state
        ctx.strokeStyle = colour[i] //color of line
        ctx.moveTo(90, y);//moveTo (x,y ) starting poinyt of line
        ctx.lineTo(200, y) //lineTo (x,y ) ending poinyt of line
        ctx.lineWidth = 2
        ctx.lineCap = cap[i]
        ctx.stroke()// draw line

        y = y + 4

    }


    // line Joins
    // --miter
    // --bevel
    // --round

    var lineJoin = ["miter", "bevel", "round"]
    x1 = [30, 40, 50]
    y1 = [30, 40, 50]
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();//reset the context state
        ctx.strokeStyle = colour[i] //color of line
        ctx.lineJoin = lineJoin[i]
        ctx.moveTo(x1[i], y1[i]);//moveTo (x,y ) starting poinyt of line
        ctx.lineTo(30 + x1[i], y1[i]) //lineTo (x,y ) ending poinyt of line
        ctx.lineTo(x1[i] + 30, y1[i] + 30) //lineTo (x,y ) ending poinyt of line
        ctx.lineTo(x1[i], y1[i] + 30) //lineTo (x,y ) ending poinyt of line
        ctx.lineTo(x1[i], x1[i] + 60) //lineTo (x,y ) ending poinyt of line
        ctx.lineWidth = 4
        ctx.stroke()


    }


    //shadow attributeColor
    //shadowColor
    //shadowOffSetX
    //shadowOffSetX
    //shadowBlur

    x = 80
    y = 6
    for (let index = 0; index < 2; index++) {
        ctx.beginPath();
        ctx.strokeStyle = "teal"
        ctx.lineWidth = 5
        ctx.shadowColor = "black"
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5
        ctx.shadowBlur = 5
        ctx.lineCap = "square"
        ctx.moveTo(x, y)
        ctx.lineTo(x + 20, y)
        ctx.stroke()


        ctx.beginPath();
        ctx.strokeStyle = "teal"
        ctx.lineWidth = 5
        ctx.shadowColor = "black"
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5
        ctx.shadowBlur = 5
        ctx.moveTo(x, y + 30)
        ctx.lineTo(x + 20, y + 30)
        ctx.stroke()
        x = x + 100;


    }







})