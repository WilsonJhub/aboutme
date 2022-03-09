'use strict';


let responseOne = prompt('Thanks for being here! What shall I call you?');
  alert('Let\'s play a game, ' + responseOne);

let answerOne = prompt('Am I married?').toUpperCase();


if(answerOne === 'Y' || answerOne === 'YES'){

//  (don't delete)console.log('Nice! You got that one right!!');

  alert('Nice! You got that one right!!');
} else if(answerOne === 'N' || answerOne === 'NO'){
  alert('That is incorrect, nice try.');
}


let answerTwo = prompt('How many children do I have? One or Two?').toUpperCase();


if(answerTwo ==='TWO' || answerTwo ==='2'){

//  (don't delete)console.log('That\'s correct! I have a boy and a girl!');

  alert('That\'s correct! I have a boy and a girl!');
} else if(answerTwo === 'ONE' || '1'){
  alert('Nope! I have 2 children. A boy and a girl.');
}


let answerThree = prompt('Am I taller than 5\'6?').toUpperCase();


if(answerThree === 'Y' || answerThree === 'YES'){

//  (don't delete)console.log('I wish... hahaha!!');

  alert('I wish... hahaha!!');
} else if(answerThree === 'N' || answerThree === 'NO'){
  alert('Yeah... I\'m short!');
}


let answerFour = prompt('Do I have 2 brothers?').toUpperCase();


if(answerFour ==='Y' || answerFour ==='YES' ){

//  (don't delete)console.log('Nope! I have 3 brothers and I am the second oldest.');

  alert('Nope! I have 3 brothers and I am the second oldest.');
}else if(answerFour === 'N' || answerFour ==='NO'){
  alert('Look at you! I actually have 3 brothers and I am the second oldest.');
}

let answerFive = prompt('Ok, I know you\'re tired of these questions but I promise this is the last one.. Do I make music?').toUpperCase();


if(answerFive ==='Y' || answerFive ==='YES'){

 //  (don't delete)console.log('How sweet...You payed attention!!');

  alert('How sweet...You payed attention!!');
}else if(answerFive ==='N' || answerFive ==='NO'){
  alert('I guess you weren\'t listening!!')
}

alert('Thank you for playing, ' + responseOne + '. Stay as long as you like!');