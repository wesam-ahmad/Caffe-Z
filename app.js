let name = prompt("Please enter your name");
let gender = prompt("please enter your gender male/female");
usergender ()
function usergender (){

while(gender != "male" && gender !="female"){
   gender= prompt("please enter your gender male/female");  
}
if (gender=="male"){
    alert("Welcome Mr. "+name+"!");
    
    
}
else if(gender=="female"){
    alert("Welcome Ms."+name+"!");
    
}
}

    let tdrinke=confirm("Do you want to drink a hot or cold drink")
    let typedrinke=prompt("please enter type of drink hot/cold ")
   if( tdrinke){
    let drink = prompt("Please enter the name of the drink you want to drink ");
    alert("The "+drink+ " is getting prepared ");
   console.log(drink);

   
   let arr = [name,gender,typedrinke, drink];
   
   
   for(let i=0 ; i<=3 ; i++){
    console.log(arr[i])
   }}


   