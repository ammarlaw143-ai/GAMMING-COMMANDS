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
function searchSite(){

let s =
document.getElementById("search")
.value.toLowerCase();

let cards =
document.querySelectorAll(".game-card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(s))
{
card.style.display="block";
}
else{
card.style.display="none";
}

});

}
function reply(){

let q=
document.getElementById("question")
.value.toLowerCase();

if(q.includes("diamond sword"))
{
document.getElementById("answer").innerHTML=
"/give @p diamond_sword";
}
else{
document.getElementById("answer").innerHTML=
"Try asking about Minecraft commands.";
}

}
