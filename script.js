function searchContent() {

let input =
document.getElementById("searchBar")
.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

if(card.innerText
.toLowerCase()
.includes(input))
{
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

function chatbot(){

let q =
document.getElementById("userInput")
.value.toLowerCase();

let answer="";

if(q.includes("diamond")){
answer="Diamonds are commonly found deep underground.";
}
else if(q.includes("teleport")){
answer="Use /tp @p x y z";
}
else if(q.includes("creeper")){
answer="Creepers explode when close to players.";
}
else{
answer="Try asking about diamonds, teleporting, creepers, enchantments or commands.";
}

document.getElementById("chatOutput")
.innerHTML=answer;

}
