/* Author: Arturo Blazquez Perez (arturobl.com) <arturo.blazquezperez@gmail.com>
 *
 * Feel free to use, redistribute, change, or do anything with the code, just notify
 * me and give proper credit to me as the author.
 */

var pixels;
var numCaras=0;
var estado="";

function checkOrientation(){
    if(document.body.clientWidth<document.body.clientHeight)
        document.getElementById("rotatepls").style.display = 'block';
    else
        document.getElementById("rotatepls").style.display = 'none';
}

function cargarWebcam(){
    var video = document.querySelector("#myVideo");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia){
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }

    function handleVideo(stream) {
        var VideoStream = window.URL.createObjectURL(stream);
        video.src = VideoStream;
    }

    function videoError(e) {
        alert("Tienes que permitir usar la cámara");
    }
}


//Lanza el buscador de colores a 30fps. Sirve para que no se laguee la cámara
function getColors(){
    var vid = document.querySelector("#myVideo");
    var i, j;
    
    document.getElementById("c").width=640;
    document.getElementById("c").height=480;
    document.getElementById("c").getContext('2d').drawImage(vid, 0, 0, 640, 480);
    pixels = document.getElementById("c").getContext('2d').getImageData(0, 0, 640, 480);
    
    //First square
    square1 = {r:0,g:0,b:0};
    square2 = {r:0,g:0,b:0};
    square3 = {r:0,g:0,b:0};
    square4 = {r:0,g:0,b:0};
    square5 = {r:0,g:0,b:0};
    square6 = {r:0,g:0,b:0};
    square7 = {r:0,g:0,b:0};
    square8 = {r:0,g:0,b:0};
    square9 = {r:0,g:0,b:0};
    
    for(i=44, j=124;i<148;){
        square1.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square1.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square1.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=228){
            j=124;
            i++;
        }
    }
    
    square1.r/=10816;
    square1.g/=10816;
    square1.b/=10816;
    
    color(1, square1);
    
    
    for(i=44, j=268;i<148;){
        square2.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square2.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square2.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=372){
            j=268;
            i++;
        }
    }
    
    square2.r/=10816;
    square2.g/=10816;
    square2.b/=10816;
    
    color(2, square2);
    
    
    for(i=44, j=412;i<148;){
        square3.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square3.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square3.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=516){
            j=412;
            i++;
        }
    }
    
    square3.r/=10816;
    square3.g/=10816;
    square3.b/=10816;
    
    color(3, square3);
    
    
    for(i=188, j=124;i<292;){
        square4.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square4.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square4.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=228){
            j=124;
            i++;
        }
    }
    
    square4.r/=10816;
    square4.g/=10816;
    square4.b/=10816;
    
    color(4, square4);
    
    
    for(i=188, j=268;i<292;){
        square5.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square5.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square5.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=372){
            j=268;
            i++;
        }
    }
    
    square5.r/=10816;
    square5.g/=10816;
    square5.b/=10816;
    
    color(5, square5);
    
    
    for(i=188, j=412;i<292;){
        square6.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square6.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square6.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=516){
            j=412;
            i++;
        }
    }
    
    square6.r/=10816;
    square6.g/=10816;
    square6.b/=10816;
    
    color(6, square6);
    
    
    for(i=332, j=124;i<436;){
        square7.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square7.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square7.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=228){
            j=124;
            i++;
        }
    }
    
    square7.r/=10816;
    square7.g/=10816;
    square7.b/=10816;
    
    color(7, square7);
    
    
    for(i=332, j=268;i<436;){
        square8.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square8.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square8.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=372){
            j=268;
            i++;
        }
    }
    
    square8.r/=10816;
    square8.g/=10816;
    square8.b/=10816;
    
    color(8, square8);
    
    
    for(i=332, j=412;i<436;){
        square9.r += pixels.data[((i*(pixels.width*4)) + (j*4))];
        square9.g += pixels.data[((i*(pixels.width*4)) + (j*4))+1];
        square9.b += pixels.data[((i*(pixels.width*4)) + (j*4))+2];
        
        j++;
        
        if(j>=516){
            j=412;
            i++;
        }
    }
    
    square9.r/=10816;
    square9.g/=10816;
    square9.b/=10816;
    
    color(9, square9);
}

function color(a, tile){
    var pegatina = document.getElementById("tile" + a);
    
    if(tile.r<110 && tile.g<110 && tile.b<110) //red
        pegatina.style.backgroundColor = "#F00";
    else if(tile.r<110 && tile.g<110 && tile.b>110) //blue
        pegatina.style.backgroundColor = "#00F";
    else if(tile.r>110 && tile.g<110 && tile.b<110) //orange
        pegatina.style.backgroundColor = "#FA0";
    else if(tile.r<110 && tile.g>110 && tile.b<110) //green
        pegatina.style.backgroundColor = "#0F0";
    else if(tile.r>110 && tile.g>110 && tile.b>110) //white
        pegatina.style.backgroundColor = "#FFF";
    else if(tile.r>110 && tile.g>110 && tile.b<110) //yellow
        pegatina.style.backgroundColor = "#FF0";
    else
        pegatina.style.backgroundColor = "#555";
}

function loadKeyboard(){
    document.body.addEventListener("keydown", getColors());
}

function saveColors(){
    var i;
    if(numCaras==6){
        var cube = Cube.fromString(estado);
        
        Cube.initSolver();
        
        document.body.innerHTML = document.body.innerHTML + cube.solve();
    }
    else{
        for(i=1;i<10;i++){
            var pegatina = document.getElementById("tile" + i);
            
            if(pegatina.style.backgroundColor == "rgb(255, 0, 0)")
                estado = estado + "F";
            else if(pegatina.style.backgroundColor == "rgb(0, 0, 255)")
                estado = estado + "R";
            else if(pegatina.style.backgroundColor == "rgb(255, 170, 0)")
                estado = estado + "B";
            else if(pegatina.style.backgroundColor == "rgb(0, 255, 0)")
                estado = estado + "L";
            else if(pegatina.style.backgroundColor == "rgb(255, 255, 255)")
                estado = estado + "U";
            else if(pegatina.style.backgroundColor == "rgb(255, 255, 0)")
                estado = estado + "D";
            
            pegatina.style.backgroundColor = "#555";
        }
        numCaras++;
        
        
    }
}