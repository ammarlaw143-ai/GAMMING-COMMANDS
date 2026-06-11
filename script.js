let c=0;
let g=0;
let ga=0;

setInterval(()=>{

if(c<100){
c++;
document.getElementById("commands").innerHTML=c;
}

if(g<50){
g++;
document.getElementById("guides").innerHTML=g;
}

if(ga<20){
ga++;
document.getElementById("games").innerHTML=ga;
}

},30);
