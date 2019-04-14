
window.onload = function() {

//setting up the images
var imgArray = new Array(6);
		 
imgArray[0] = new Image();
imgArray[0].src = 'dice1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'dice2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'dice3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'dice4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'dice5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'dice6.jpg';



//referencing the dices
var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");

//initilizing the count and balance
var turnCount = 0;
var balance = 5;

//setting the function
 function rollDice(){
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.src = imgArray[d1-1].src;
    die2.src = imgArray[d2-1].src;
    status.innerHTML = "You rolled "+diceTotal+".";
  
  turnCount += 1;
  document.getElementById("turnCount").innerHTML = turnCount;
    
	if(d1 == d2 || diceTotal == 7 || diceTotal == 11){
        status.innerHTML += " Great you won!";
		balance += 1;
        document.getElementById("balance").innerHTML = balance;
    }
	else if (balance == 0){
		  document.getElementById('roll').style.visibility = 'hidden';
		
	}
	else {
		status.innerHTML += " Sorry you lost!";
		balance -= 1;
        document.getElementById("balance").innerHTML = balance;
	}
	
}
//calling the function on click
 document.getElementById("roll").onclick = rollDice;
};

