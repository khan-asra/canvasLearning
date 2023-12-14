//defination
window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');


    const canvas2 = this.document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');

    const canvas3 = this.document.getElementById('canvas3');
    const ctx3 = canvas3.getContext('2d');


    //Blue rectangle 
    ctx.fillStyle = "blue"
    ctx.fillRect(2, 20, 20, 30);

    //Blue rectangle 
    ctx.fillStyle = "yellow"
    ctx.fillRect(4, 40, 20, 30);

    // green
    ctx.fillStyle = "green"
    ctx.fillRect(6, 50, 20, 30);

    //draw lines
    ctx.beginPath();//reset the context state
    ctx.moveTo(10, 10);//moveTo (x,y ) starting poinyt of line
    ctx.lineTo(30, 10) //lineTo (x,y ) ending poinyt of line
    ctx.strokeStyle = "red" //color of line
    ctx.lineWidth = 1
    ctx.stroke()// draw line
    ctx.lineCap = "round"

    // how to draw conplex lines zigzag lines

    let x = -1
    for (let i = 0; i < 5; i++) {

        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 10);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 70) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "pink" //color of line
        ctx.stroke()// draw line
        //---------------------------------------
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 70);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 10) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "pink" //color of line
        ctx.stroke()// draw line

    }

    x = -5
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 10);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 70) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "purple" //color of line
        ctx.moveTo(x, 70);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 10) //lineTo (x,y ) ending poinyt of line
        ctx.stroke()// draw line

    }
    x = -10
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();//reset the context state
        ctx.moveTo(x, 10);//moveTo (x,y ) starting poinyt of line
        x = x + 50;
        ctx.lineTo(x, 70) //lineTo (x,y ) ending poinyt of line
        ctx.strokeStyle = "#601ca4" //color of line
        ctx.moveTo(x, 70);//moveTo (x,y ) starting poinyt of line
        x = x + 50
        ctx.lineTo(x, 10) //lineTo (x,y ) ending poinyt of line
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
        ctx.shadowOffsetY = -5
        ctx.shadowBlur = 5
        ctx.moveTo(x, y + 30)
        ctx.lineTo(x + 20, y + 30)
        ctx.stroke()
        x = x + 100;


    }

    //-----------------------------------CANVAS2---------------------------
    /*
    ctx2.lineCap = |butt|round|square
    ctx2.lineJoin = bevel|round|miter
    ctx2.shadowBlur =blur amount of shadow
    ctx2.shadowColor color of shadow
    ctx2.shadowOffsetX = horizontal distance of the shadow from the shape
    ctx2.shadowOffsetY =  vertical distance of the shadow from the shape
    */



    ctx2.beginPath()
    ctx2.strokeStyle = "red"
    ctx2.lineWidth = 10
    ctx2.moveTo(20, 20)
    ctx2.lineTo(60, 20)
    ctx2.lineTo(20, 80)
    ctx2.lineTo(60, 80)
    ctx2.lineCap = "butt"
    ctx2.lineJoin = "bevel"
    ctx2.shadowBlur = 5
    ctx2.shadowColor = "black"
    ctx2.shadowOffsetX =10
    ctx2.shadowOffsetY =10
    ctx2.stroke()


    ctx2.beginPath()
    ctx2.strokeStyle = "blue"
    ctx2.lineWidth = 10
    ctx2.moveTo(120, 20)
    ctx2.lineTo(80, 20)
    ctx2.lineTo(120, 80)
    ctx2.lineTo(80, 80)
    ctx2.lineCap = "round"
    ctx2.lineJoin = "round"
    ctx2.shadowBlur = 5
    ctx2.shadowColor = "black"
    ctx2.shadowOffsetX =10
    ctx2.shadowOffsetY =-10
    ctx2.stroke()


    ctx2.beginPath()
    ctx2.strokeStyle = "red"
    ctx2.lineWidth = 10
    ctx2.moveTo(140, 20)
    ctx2.lineTo(180, 20)
    ctx2.lineTo(140, 80)
    ctx2.lineTo(180, 80)
    ctx2.lineCap = "square"
    ctx2.lineJoin = "miter"
    ctx2.shadowBlur = 5
    ctx2.shadowColor = "black"
    ctx2.shadowOffsetX =10
    ctx2.shadowOffsetY =10
    ctx2.stroke()

//circle

var radius = Math.PI/180
  ctx3.beginPath()
  ctx3.strokeStyle="purple"
  ctx3.lineWidth= 2
  //(x,y, starting point,endingpoint)
  ctx3.arc(80,80,50,0 *radius,180*radius,false)
  ctx3.stroke()


  ctx3.beginPath()
  ctx3.strokeStyle="purple"
  ctx3.lineWidth= 2
  //(x,y, starting point,endingpoint)
  ctx3.arc(110,90,40,50 *radius,180*radius,true)
  ctx3.stroke()

//quadratic 
  ctx3.beginPath()
  ctx3.strokeStyle="orange"
  ctx3.lineWidth= 2
ctx3.moveTo(70,190)
ctx3.quadraticCurveTo(100,30,200,150)
ctx3.stroke()



})