// let name = prompt("Please enter your name");
// let gender = prompt("please enter your gender male/female");

// usergender ()
// function usergender (){

// while(gender != "male" && gender !="female"){
//    gender= prompt("please enter your gender male/female");  
// }
// if (gender=="male"){
//     alert("Welcome Mr. "+name+"!");
    
    
// }
// else if(gender=="female"){
//     alert("Welcome Ms."+name+"!");
    
// }
// }
//     let age = prompt("please enter your age")
//     let tdrinke=confirm("Do you want to drink a hot or cold drink")
//     let typedrinke=prompt("please enter type of drink hot/cold ")
//    if( tdrinke){
//     let drink = prompt("Please enter the name of the drink you want to drink ");
//     alert("The "+drink+ " is getting prepared ");
//    console.log(drink);

   
//    let arr = [name,gender,typedrinke, drink];
   
   
//    for(let i=0 ; i<=3 ; i++){
//     console.log(arr[i])
//    }}



   
//    let div1=document.getElementById("userinput");

//    let div2=document.createElement('div');
  
//    const p = document.createElement('p');
//    p.textContent= name ;
//    div2.appendChild(p);
//    let ul=document.createElement('ul');

//       let usergender1=document.createElement('li');

//       usergender1.textContent=`gender : ${gender}`;
//       ul.appendChild(usergender1);

//       let userage=document.createElement('li');

//       userage.textContent=`age : ${age}`;
//       ul.appendChild(userage);

//       let drink1=document.createElement('li');

//       drink1.textContent=`drink : ${typedrinke} `;
//       ul.appendChild(drink1);
     
     
//       div2.appendChild(ul);
     

//    div1.appendChild(div2);



   let form = document.getElementById("userinput");
   let datashow = document.getElementById("datashow");
   form.addEventListener("submit",function handelesubmit(event){
    event.preventDefault();
    let name=event.target.name.value;
    let age=event.target.age.value;
    const drinkType = event.target.drinktype1.checked ? event.target.drinktype1.value : "";
    const drinkType1 = event.target.drinktype2.checked ? event.target.drinktype2.value : "";
    let drinkname=event.target.drinkname.value;

    console.log(name,age,drinkType,drinkType1,drinkname);




    render (name,age,drinkType,drinkType1 ,drinkname);


   })


   function render (name,age,drinkType, drinkType1,drinkname){
    let pname=document.createElement("p");
    let pAge=document.createElement("p");
    let pdt=document.createElement("p");
    let pdt1=document.createElement("p");
    let pdn=document.createElement("p");
     

    pname.textContent=name;
    pAge.textContent=age;
    pdt.textContent=drinkType;
    pdt1.textContent=drinkType1;
    pdn.textContent=drinkname;

    datashow.appendChild(pname);
    datashow.appendChild(pAge);
    datashow.appendChild(pdt);
    datashow.appendChild(pdt1);
    datashow.appendChild(pdn);
    form.reset ();
   }


   


   