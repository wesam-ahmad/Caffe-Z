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
    let age = prompt("please enter your age")
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



   
   let div1=document.getElementById("userinput");

   let div2=document.createElement('div');
  
   const p = document.createElement('p');
   p.textContent= name ;
   div2.appendChild(p);
   let ul=document.createElement('ul');

      let usergender1=document.createElement('li');

      usergender1.textContent=`gender : ${gender}`;
      ul.appendChild(usergender1);

      let userage=document.createElement('li');

      userage.textContent=`age : ${age}`;
      ul.appendChild(userage);

      let drink1=document.createElement('li');

      drink1.textContent=`drink : ${typedrinke} `;
      ul.appendChild(drink1);
     
     
      div2.appendChild(ul);
     

   div1.appendChild(div2);


   