var x = 0;
var clickpower = 1;
var lvlup1 = 0;
var costfr1 = 10;
function sigma() {
    let total = (x += clickpower); 
    document.getElementById('demo').innerHTML = total;
    let audio = new Audio('slap.mp3');
    audio.play();
}
//upgrade1 function
function upgrade1() {
    if (x >= costfr1) { 
        clickpower += 2;   
        x = x - costfr1;   
        document.getElementById('demo').innerHTML = x;
        document.getElementById('ycounter').innerHTML = clickpower;
        lvlup1 += 1;
        document.getElementById('mainer').style.color = "black";
        document.getElementById('mainer').textContent = "Level: " + lvlup1;
        costfr1 *= 1.3;
        costfr1 = Math.round(costfr1);
        document.getElementById('costfor1').textContent = "Cost:" + costfr1;
    }
    else{
        document.getElementById('mainer').innerHTML = "You can't buy that upgrade yet!";
        document.getElementById('mainer').style.color = "red";
    }
}
function upgrade2(){
    if (lvlup1 == 20){
        
    }
    else{
        
    }
}
    


