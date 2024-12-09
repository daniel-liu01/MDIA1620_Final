const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. 
There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". 
By default they are all true. The application allow users to add a color to the system as long as 
it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" 
and then a second readline for the color itself. A
lways DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors.
You can do this by making a new array, then looping through userColors 
and only pushing the colors that are true into the new array. Then reassign the new array to userColors.

PLAN:
- add the 5 colors to the theme object, set them to true
- in the addusercolor function, ask user for a color input, then push it to the usercolors array
  - only allow users to add the 5 colors in the theme, and only the ones that are true
  - otherwise console.log a message saying the cannot add this color at this time
- in the toggle function, allow users to toggle the colors in the theme true or false
  - when a color is toggled false, use a for loop splice that specific color from the usercolors array
  - can make a new bannedColors array and push those inputs there

*/

let userColors = [];
let bannedColors =[];
let theme = {
  //the 5 color and their boolean value goes here
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true,
};


//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors
  readline.question("What color would you like to use: red | green | blue | yellow | orange ", color=>{
    if(theme[color] === true){
      userColors.push(color);
      console.log(`${color} has been added to the color display.`);
    }
    else{
      console.log(`Sorry, ${color} is not allowed for this theme.`);
    }
    StartApp();
  });
}

//rename this to DisplayUserColors
function DisplayUserColors(){
  //add a color to userColors
  console.log("These are the colors we've used so far:")
  for(i=0; i<userColors.length; i++){
    console.log(userColors[i]);
  }
  StartApp();
}

//banned colors
function DisplayBannedColors(){
  console.log("These are the colors we took out so far:")
  for(i=0; i<bannedColors.length; i++){
    console.log(bannedColors[i]);
  }
  StartApp();
}


//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  readline.question("What color would you like to toggle: red | green | blue | yellow | orange ", toggle=>{
    theme[toggle] = !theme[toggle];
    if(theme[toggle] === false){
      userColors.splice(toggle);
      bannedColors.push(toggle);
    }
    StartApp();
  });
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add"){
      AddUserColor();
    }
    else if(_command === "display"){
      DisplayUserColors();
    }
    else if(_command === "banned"){
      DisplayBannedColors();
    }
    else if(_command === "toggle"){
      ToggleThemeColor();
    }
    else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();