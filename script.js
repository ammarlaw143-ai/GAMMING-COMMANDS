function searchCommands(){

let input =
document.getElementById("search")
.value.toLowerCase();

let commands =
document.querySelectorAll("#commands p");

commands.forEach(cmd=>{

if(cmd.innerText
.toLowerCase()
.includes(input))
{
cmd.style.display="block";
}
else{
cmd.style.display="none";
}

});

}
