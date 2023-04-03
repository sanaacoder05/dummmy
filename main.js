img="";
checkbox = "";
keyboard= [];
sound ="";
function preload(){
    
    sound = loadSound('bgm.mp3')
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400)
    objectDetection = ml5.objectDetector('cocossd',Modelloaded);
     document.getElementById('status').innerHTML="status :  detecting objects";
}
function Modelloaded(){
    console.log('model loaded**');
    checkbox = true;

  
    
}

function gotresults(error,result){
    if(error){
        console.log(error);

    }

    else{
        console.log(result);

        keyboard = result;
    }
}
/*function draw(){
    image(img,0,0,650,450);
    fill("#f5f5dc");
    text("dog",60,80);
    noFill();
    stroke("red");
    rect(30,40,300,400);

    fill("#f5f5dc");
    text("cat",60,80);
    noFill();
    stroke("red");
    rect(300,140,230,340);

}*/

//class 133 code*
/*function draw(){

   image(img,0,0,650,450);
    if (checkbox != ""){
        for(i=0 ;i<keyboard.length;i++){
            document.getElementById("status").innnerHTML = "objects detected";
            fill("#ffffff");
            percent = floor(keyboard[i].confidence * 100);
            whatsup = keyboard[i].label;
            text(whatsup+keyboard[i].x + 10,keyboard[i].y+10);
            console.log(whatsup+" "+percent+"%"); 
            noFill();
            stroke("red");
            rect(keyboard[i].x,keyboard[i].y,keyboard[i].width,keyboard[i].height);
           }
    }

}*/
//class 134 code*
function draw(){
  
    image(video,0,0,650,450);
    if (checkbox != ""){
        r= random(100);
        g = random(150);
        b = random(95);
        objectDetection.detect(video,gotresults);
        for(i=0 ;i<keyboard.length;i++){
         
            fill(r,g,b);
            percent = floor(keyboard[i].confidence * 100);
            whatsup = keyboard[i].label;
            text(whatsup,keyboard[i].x + 10,keyboard[i].y+10);
            console.log(whatsup+" "+percent+"%"); 
            noFill();
            stroke(r,g,b);
            
            rect(keyboard[i].x,keyboard[i].y,keyboard[i].width,keyboard[i].height);
           

            if(keyboard[i].label == "person"){
                sound.stop();
            
                document.getElementById("status").innnerHTML = "objects detected";

            }

            else{
                sound.play();
                document.getElementById("status").innnerHTML = "objects  not detected";
            }

        }

        if(keyboard.length == 0){
            sound.play();
        }
    }

}