canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_height=50;
car_width= 100;

car1_height=50;
car1_width= 100;





background_image="racing.jpg";

car_image="th.jpg";
car1_image="car1.png";

car_x=10;
car_y=10;

car1_x=10;
car1_y=100;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground();
    background_imgTag.src=background_image;
   
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar();
    car_imgTag.src=car_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1();
    car1_imgTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}


window.addEventListener("keydown",my_keydown) ;

function my_keydown(e){
    key_down = e.keyCode;
    console.log(key_down);
    if(key_down=="38"){
        up();
        console.log("up is pressed");
    }

    if(key_down=="40"){
        down();
        console.log("down is pressed");
    }
    if(key_down=="37"){
        left();
        console.log("left is pressed");
    }
    if(key_down=="39"){
        right();
        console.log("right is pressed");
    }
    


    if(key_down=="87"){
        upcar();
        console.log("W is pressed");
    }

    if(key_down=="83"){
        downcar();
        console.log("S is pressed");
    }
    if(key_down=="65"){
        leftcar();
        console.log("A is pressed");
    }
    if(key_down=="68"){
        rightcar();
        console.log("D is pressed");
    }
        
}

function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow is pressed ,  x= "+car1_x+"  y= " +car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow is pressed ,  x= "+car1_x+"  y= " +car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function left(){
    if (car1_x>=0){
        car1=car1-10;
        console.log("when left arrow is pressed ,  x= "+car1_x+"  y= " +car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("when right arrow is pressed ,  x= "+car1_x+"  y= " +car1_y);
        uploadBackground();
        uploadcar1();
    }
}



function upcar(){
    if (car_y>=0){
        car_y=car_y-10;
        console.log("when up arrow is pressed ,  x= "+car_x+"  y= " +car_y);
        uploadBackground();
        uploadcar();
    }
}

function downcar(){
    if (car_y<=500){
        car_y=car_y+10;
        console.log("when down arrow is pressed ,  x= "+car_x+"  y= " +car_y);
        uploadBackground();
        uploadcar();
    }
}

function leftcar(){
    if (car_x>=0){
        car=car-10;
        console.log("when left arrow is pressed ,  x= "+car_x+"  y= " +car_y);
        uploadBackground();
        uploadcar();
    }
}
function rightcar(){
    if (car_x<=700){
        car_x=car_x+10;
        console.log("when right arrow is pressed ,  x= "+car_x+"  y= " +car_y);
        uploadBackground();
        uploadcar();
    }
}

