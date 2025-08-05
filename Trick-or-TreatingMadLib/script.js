let noun = prompt("Enter a noun:");//
let celebrity = prompt("Enter a celebrity name:");//
let animal = prompt("Enter a animal:");//
let verb = prompt("Enter a verb:");//
let adj = prompt("Enter a adj:");//
let adj2 = prompt("Enter another adj:");//
let num = Number(prompt("Enter a number: "));//
let num2 = Number(prompt("Enter another number: "));//
let total = num+num2;//
let result= false;

if(noun && verb && adj && num && num2){
  
  const story = 'On Halloween, you get to go trick-or-treating! Everyone will dress up in costumes, like '+ celebrity+ ' or a '+ animal+ '. Your mom takes you and your best friend trick-or-treating around ' +noun+ '. While you are out, your dad stays at home and ' + verb + '. This year, you got '+ num+ ' peices of ' + adj + ' candy and ' + num2 + ' of ' + adj2 + ' candy! For a grand total of ' +total+' pecies of candy. And your initial estamite of how much candy you would get was '+result+ '. 😔';
  console.log(story);
  }
else{
  console.log("Please answer all the questions");
}

