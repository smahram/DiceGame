function rollDice(){
    //Will generate a random number 1-6 for our die
    var RandomNum= Math.floor(Math.random() * 6) + 1;
    
    //generates which image will be selected
    var firstDiceImage = 'Images/dice' + RandomNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
}