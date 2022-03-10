'use strict';


let user = prompt('Thanks for being here! What shall I call you?');
alert('Let\'s play a game, ' + user);

function questionOne(){

  let answerOne = prompt('Am I married? ' + 'Yes or no?').toUpperCase();


  if(answerOne === 'Y' || answerOne === 'YES'){

    // console.log('Nice! You got that one right!!');

    alert('Nice! You got that one right!!');
  } else if(answerOne === 'N' || answerOne === 'NO'){
    alert('That is incorrect, nice try.');
  }
}
questionOne();

function questionTwo(){

  let answerTwo = prompt('How many children do I have? One or Two?').toUpperCase();
  
  
  if(answerTwo ==='TWO' || answerTwo ==='2'){
  
    // console.log('That\'s correct! I have a boy and a girl!');
  
    alert('That\'s correct! I have a boy and a girl!');
  } else if(answerTwo === 'ONE' || '1'){
    alert('Nope! I have 2 children. A boy and a girl.');
  }
}
questionTwo();

function questionThree(){

  let answerThree = prompt('Am I taller than 5\'6? ' + 'Yes or no?').toUpperCase();
  
  
  if(answerThree === 'Y' || answerThree === 'YES'){
  
    // console.log('I wish... hahaha!!');
  
    alert('I wish... hahaha!!');
  } else if(answerThree === 'N' || answerThree === 'NO'){
    alert('Yeah... I\'m short!');
  }
}
questionThree();

function questionFour(){

  let answerFour = prompt('Do I have 2 brothers? ' + 'Yes or no?').toUpperCase();
  
  
  if(answerFour ==='Y' || answerFour ==='YES' ){
  
    // console.log('Nope! I have 3 brothers and I am the second oldest.');
  
    alert('Nope! I have 3 brothers and I am the second oldest.');
  }else if(answerFour === 'N' || answerFour ==='NO'){
    alert('Look at you! I actually have 3 brothers and I am the second oldest.');
  }
}
questionFour();

function questionFive(){

  let answerFive = prompt('Ok, I know you\'re tired of these questions but I promise this is the last one.. Do I make music? ' + 'Yes or no?').toUpperCase();
  
  if(answerFive ==='Y' || answerFive ==='YES' ){
    alert('That\'s correct!');
  }else if(answerFive ==='N' || answerFive ==='NO'){
    alert('I guess you weren\'t listening!!');
  }
  
  alert('Thank you for playing, ' + user);
}
questionFive();

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
function questionSeven(){

  let favfood = [taco, steak, salmon, burger, chicken, cake, candy];
  console.log(favfood.length);
  
  
  let MyRetry = 5;
  let guessSeven = 'salmon && chicken && burger';
  
  while(favfood ){
    answer = prompt('I do not like steak, candy, or cake!!');
  }
}
questionSeven();


