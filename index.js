//First number generator

var randomNumber1=Math.random();
var min=(randomNumber1*6)+1;
min= Math.floor(min);
console.log(min);
if(min===1){
  document.querySelector(".img1").src="dice1.png";
}
else if(min===2){
  document.querySelector(".img1").src="dice2.png";
}
else if(min===3){
  document.querySelector(".img1").src="dice3.png";
}
else if(min===4){
  document.querySelector(".img1").src="dice4.png";
}
else if(min===5){
  document.querySelector(".img1").src="dice5.png";
}
else{
  document.querySelector(".img1").src="dice6.png"
}

//Second number generator

var randomNumber2=Math.random();
var max=(randomNumber2*6)+1;
max= Math.floor(max);
if(max===1){
  document.querySelector(".img2").src="dice1.png";
}
else if(max===2){
  document.querySelector(".img2").src="dice2.png";
}
else if(max===3){
  document.querySelector(".img2").src="dice3.png";
}
else if(max===4){
  document.querySelector(".img2").src="dice4.png";
}
else if(max===5){
  document.querySelector(".img2").src="dice5.png";
}
else{
  document.querySelector(".img2").src="dice6.png";
}

//Winner section

if(min>max){
  document.querySelector("h1").textContent="Player 1 is winner";
}
else if(min<max){
  document.querySelector("h1").textContent="Player 2 is winner";
}
else{
  document.querySelector("h1").textContent="Its a draw";
}
