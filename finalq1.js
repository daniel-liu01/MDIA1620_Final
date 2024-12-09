const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means 
it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. 
When the alcohol setting is true, if the age in the registry is 19 or above console log 
"You are allow to drink in here." otherwise "You are not allowed in here.". 
When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, 
but the user can set the age to another desired drinking age by using the command "change age". 
This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. 
By default VIP is false, but the user can write "make vip", 
to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."

PLAN:
1. Use the registerage function and ask user to input an age
2. Add a setting name "alcohol" in the settings{}
    - Use if statement for whether they are allowed to drink here, or everyone is welcome

Challenge 1:
add a setting for the legal age and set it to 19
make a function that can be activated with the command "change age"
ask user what they want the age to be, with that, update the legalAge setting with user's input

Challenge 2:
add VIP to settings and make default it to false
add "make vip" and 'cancel VIP" commands to startapp()
Use for loop to through the registry, and if VIP equals true, console log the VIP a message,
else console log that store is closed today

*/

let registry = [];
let settings = {
  //alcohol setting goes here
  alcohol:true,
  legalAge:19,
  vip:false,
};

//rename this to RegisterUser
function RegisterUser(){
  //ask for the age with readline
  readline.question("Hi, I'm checking your age to see if you are of age to drink or not. Please enter your age: ", age =>{
  registry.push(age);
    if (age >= "19" && settings.alcohol ===true){
    console.log("You are allowed to drink here!");
  }
  else if(settings.alcohol === false){
    console.log("No alcohol will be provided. Everyone is welcome here!");
  }
  else{
    console.log("You are underage and not allowed to drink here.");
  } 
  StartApp();
  });
}
//Challenge 1
function changeAge(){
  readline.question("Hypothetically, what would you change the legal drinking age to? ", legal =>{
    settings.legalAge=legal;
    console.log(`Legal drinking age has been changed to ${settings.legalAge}!`);
    StartApp();
  });
}
//rename this to ToggleAlcohol
function Togglealcohol(){
  //toggle alcohol setting
  settings.alcohol=!settings.alcohol;
  console.log("Alchol setting has been toggled.")
  StartApp();
}

//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
  for(i=0; i<registry.length; i++){
    if(settings.vip[i] === true){
      console.log("You can come in VIP.");
    }
    else if(settings.vip[i] ===false){
      console.log("Sorry, the store is closed today.");
    }
  }
  StartApp();
}

//VIP
function manageVIP(){
  readline.question("When did you enter? Please tell me your index and I will make you a VIP. ", index =>{
    settings.vip[index] === true;
    console.log("Welcome VIP.");
    StartApp();
  });
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add"){
      RegisterUser();
    }
    else if(_command === "toggle"){
      Togglealcohol();
    }
    else if(_command === "vip"){
      manageVIP();
    }
    else if(_command === "make vip"){
      settings.vip=true;
      console.log("You are now a VIP member.");
      StartApp();
    }
    else if(_command === "cancel vip"){
      settings.vip=false;
      console.log("Your VIP membership has been cancelled.");
      StartApp();
    }
    else if(_command === "change age"){
      changeAge();
    }
    else if(_command === "check vip"){
      NotifyAll();
    }
    else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();