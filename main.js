var canvas=new fabric.Canvas('c');
blockw=35;
blockh=35;
playerx=10;
playery=10;
var player_ob="";
var block_ob="";
function player_udt(){
    fabric.Image.fromURL("bighead.jpg",function(Img){
        player_ob=Img;
        player_ob.scaleToWidth(150);
        player_ob.scaleToHeight(150);
        player_ob.set({
            top:playery,left:playerx
        });
        canvas.add(player_ob);
    });
};
function player_bs(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_ob=Img;
        block_ob.scaleToWidth(blockw);
        block_ob.scaleToHeight(blockh);
        block_ob.set({
            top:playery,left:playerx
        });
        canvas.add(block_ob);
    });
};
window.addEventListener("keydown",keyd);
function keyd(e){
    keypressed=e.keyCode;

    if(e.shiftKey==true&& keypressed=='67'){
        blockw=blockw+10;
        blockh=blockh+10;
        document.getElementById("cwidth").innerHTML=blockw;
        document.getElementById("cheight").innerHTML=blockh;
        
    }
    if(e.shiftKey==true&& keypressed=='69'){
        blockw=blockw-10;
        blockh=blockh-10;
        document.getElementById("cwidth").innerHTML=blockw;
        document.getElementById("cheight").innerHTML=blockh;
        
    }
    if (keypressed =='89') {
        player_bs('YELLOW_WOOL_NOT_yellow_WALL.png');
        console.log("y")
    }
    if (keypressed =='67') {
        player_bs('cloud.jpg');
        console.log("c")
    }
    if (keypressed =='89') {
        player_bs('YELLOW_WOOL_NOT_yellow_WALL.png');
        console.log("y")
    }if (keypressed =='85') {
        player_bs('unique.png');
        console.log("u")
    }
    if (keypressed =='71') {
        player_bs('ground.png');
        console.log("g")
    }
    if (keypressed =='37') {
        player_bs('left');
        console.log("left")
    }
    if (keypressed =='38') {
        player_bs('up');
        console.log("up")
    }
    if (keypressed =='39') {
        player_bs('right');
        console.log("right")
    }
    if (keypressed =='40') {
        player_bs('down');
        console.log("down")
    }
}
function left(){
    if (playerx>0) {
        playerx=playerx-blockw;
    
        canvas.remove(player_ob);
        player_udt();

    }
}
function right(){
    if (playerx<800) {
        playerx=playerx+blockw;
    
        canvas.remove(player_ob);
        player_udt();
        
    }
}
function up(){
    if (playery>0) {
        playery=playery-blockh;
    
        canvas.remove(player_ob);
        player_udt();
        
    }
}
function down(){
    if (playery<500) {
        playery=playery+blockh;
    
        canvas.remove(player_ob);
        player_udt();
        
    }
}