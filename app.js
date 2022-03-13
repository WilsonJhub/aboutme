'use strict';

let finalscore = 0;

let user = prompt('Thanks for being here! What shall I call you?');
alert('Let\'s play a game, ' + user);


// <---------questionOne--------->

function questionOne(){

  let answerOne = prompt('Am I married? ' + 'Yes or no?').toUpperCase();


  if(answerOne === 'Y' || answerOne === 'YES'){
    alert('Nice! You got that one right!!');
    // console.log('Nice! You got that one right!!');
    finalscore ++;
  } else if(answerOne === 'N' || answerOne === 'NO'){
    alert('That is incorrect, nice try.');
  }
}
questionOne();



// <---------questionTwo--------->

function questionTwo(){

  let answerTwo = prompt('How many children do I have? One or Two?').toUpperCase();
  

  if(answerTwo ==='TWO' || answerTwo ==='2'){
    alert('That\'s correct! I have a boy and a girl!');
        // console.log('That\'s correct! I have a boy and a girl!');
    finalscore ++;
  } else if(answerTwo === 'ONE' || '1'){
    alert('Nope! I have 2 children. A boy and a girl.');
  }
}
questionTwo();


// <---------questionThree--------->

function questionThree(){

  let answerThree = prompt('Am I taller than 5\'6? ' + 'Yes or no?').toUpperCase();
  
  
  if(answerThree === 'Y' || answerThree === 'YES'){
    alert('I wish... hahaha!!');
    // console.log('I wish... hahaha!!');
    finalscore ++;
  } else if(answerThree === 'N' || answerThree === 'NO'){
    alert('Yeah... I\'m short!');
  }
}
questionThree();


// <---------questionFour--------->

function questionFour(){

  let answerFour = prompt('Do I have 2 brothers? ' + 'Yes or no?').toUpperCase();


  if(answerFour ==='Y' || answerFour ==='YES' ){
    alert('Nope! I have 3 brothers and I am the second oldest.');
    // console.log('Nope! I have 3 brothers and I am the second oldest.');
    finalscore ++;
  }else if(answerFour === 'N' || answerFour ==='NO'){
    alert('Look at you! I actually have 3 brothers and I am the second oldest.');
    // console.log('Look at you! I actually have 3 brothers and I am the second oldest.');
  }
}
questionFour();


// <---------questionFive--------->

function questionFive(){

  let answerFive = prompt('Ok, I know you\'re tired of these questions but I promise this is the last one.. Do I make music? ' + 'Yes or no?').toUpperCase();
  
  if(answerFive ==='Y' || answerFive ==='YES' ){
    alert('Wow, you remembered!!');
  }else if(answerFive ==='N' || answerFive ==='NO'){
    alert('I guess you weren\'t listening!!');
  }
  
  alert('Thank you for playing, ' + user);
}
questionFive();


// <---------questionSix--------->

function questionSix(){

  let answerSix = 3;
  let maxRetry = 3;
  
  for (let i = 0;i < maxRetry; i++){

    let guessSix = prompt('I\'m thinking of number between 1 and 6. Guess that number!');
    if (parseInt (guessSix) === answerSix){
      alert('Wow! Nice job!');
      break;
    }else if(guessSix > answerSix){
      alert('Almost, you\'re too high!');
    }else if(guessSix < answerSix){
      alert('Too low. Try again!');
    }
  }
  if(i === maxRetry){
    alert('Awwww. You were so close! The answer was 3!');
  }
}
questionSix();


// <---------questionSeven--------->

function questionSeven(){

  let foodArray = ['taco', 'steak', 'salmon', 'burger', 'chicken', 'cake', 'candy'];
  let answer7 = ['salmon', + 'chicken', + 'burger' ];
  let guessLimit = 6;
  
  for (let i = 0; i < guessLimit; i++){
    questionSeven = prompt('What is my favorite kind of meat to eat for protien consumption?').toLowerCase();
    if (parseInt (guess7) === answer7){
      alert('Wow! You must workout as well!');
      break;
    }else if (guess7 != answer7)
    alert('There are 3 total answers! Try again!');
  }
}

questionSeven();


