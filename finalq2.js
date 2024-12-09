const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. 
This badge system depends on the amount of points you accumulated in these modes 
"new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. 
The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", 
the system will ask the user which mode they want to add 1 point to. 
The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. 
EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. 
This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest

PLAN:
1. add each badge to the badge{} and default it to 0
    When _command === status, run through the {} and list out each badge and the points currently using for loop
2. In the addpoints function, ask users for an input. List out all the badge options
    Whicheever one they pick, update the badge{} and add one point to it

Challenge 1:
Make a variable for the total points
Use for loop and tally up the points in the badge{}
Whatever the total is, console.log the appropriate message

Challenge 2:
When adding points, instead of adding 1 pt each time, add the [input].length to the badge

*/

let badge = {
  //modes go here "new", "easy", "medium", "hardest", and "apocolypse"
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocolypse:0,
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  for (let key in badge){
    console.log(`The count for ${key} currently is ${badge[key]}.`);
  }
  StartApp();
}

//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question("Please select one of the following badges: new | easy | medium | hardest | apocolypse ", selection=>{
    // Regular function, add 1 point at a time
    // badge[selection] += 1;
    // StartApp();

  //Challenge 2 - Add the length of the word
    badge[selection] += selection.length;
    console.log(`Badge ${selection} has been added.`)
    StartApp();
  });
}

//Challenge 1
function TotalPoints(){
  let total = 0;
  for (let key in badge){
    total += badge[key];
  }
  console.log (`Total point count: ${total}`);
  //Message for the user
  if(total < 10){
    console.log("You are horrible, newbie!");
  }
  else if(total >= 10 && total < 20){
    console.log("You are an adventurer!");
  }
  else if(total >= 20 && total < 30){
    console.log("You are a slayer!!");
  }
  else if(total >= 30 && total < 40){
    console.log("You are a divined!!!");
  }
  else if(total >= 40){
    console.log("You are eternal!!!!");
  }
  StartApp();
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if (_command === "status"){
      ShowStatus();
    }
    else if(_command ==="add"){
      AddPoints();
    }
    else if(_command ==="total"){
      TotalPoints();
    }
    else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();