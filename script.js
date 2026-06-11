function minecraftHelper(question){
  const q = question.toLowerCase();

  if(q.includes("diamond")){
    return "Diamonds are commonly found below Y level -59.";
  }

  if(q.includes("teleport")){
    return "Use /tp @p x y z";
  }

  return "Try asking about commands, diamonds, teleporting, mobs, or enchantments.";
}
