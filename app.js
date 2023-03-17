let name = prompt("Please enter your name");
let gender = prompt("please enter your gender male/female");
if (gender=="male"){
    alert("Welcome Mr. "+name+"!");
    
}
else if(gender=="female"){
    alert("Welcome Ms."+name+"!");
}
   else{
    alert("welcome!")
   }
   if(confirm("Do you want to drink a hot or cold drink")){
    let drink = prompt("Please enter the name of the drink you want to drink ");
    alert("The "+drink+ " is getting prepared ");
   console.log(drink);
   }
   