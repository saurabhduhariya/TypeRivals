// const sentences = await run();
// const words = sentences.split(' ');
// const wordsCount = words.length;

// const gametime = 30 * 1000;
// window.timer = null;
// window.gameStart = null;
// window.pauseTime = 0;

// function addClass(el,name) {
//   el.className += ' '+name;
// }
// function removeClass(el,name) {
//   el.className = el.className.replace(name,'');
// }

// function randomWord() {
//   const randomIndex = Math.floor(Math.random() * wordsCount);
//   return words[randomIndex];
// }

// function formatWord(word) {
//    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
//   }

// async function newGame() {
//   document.getElementById('words').innerHTML = '';
//   for(let i = 0; i < 200; i++) {
//     document.getElementById('words').innerHTML += formatWord(randomWord());
//   }
//   addClass(document.querySelector('.word'), 'current');
//   addClass(document.querySelector('.letter'), 'current');
//   document.getElementById('timer').innerHTML = (gametime / 1000) + '';
//   window.timer = null;
// }

// function getWpm() {
//   const words = [...document.querySelectorAll('.word')];
//   const lastTypedWord = document.querySelector('.word.current');
//   const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
//   const typedWords = words.slice(0, lastTypedWordIndex);
//   const correctWords = typedWords.filter(word => {
//   const letters = [...word.children];
//   const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
//   const correctLetters = letters.filter(letter => letter.className.includes('correct'));
//   return incorrectLetters.length === 0 && correctLetters.length === letters.length;
//   });
//   return correctWords.length / gametime * 60000;
// }

// function gameOver() {
//    clearInterval(window.timer);
//     addClass(document.getElementById('type'), 'over');
//     document.getElementById('timer').innerHTML = `WPM: ${getWpm()}`;
// }

// document.getElementById('type').addEventListener('keyup', ev=> {
//   const key = ev.key;
//   const currentWord = document.querySelector('.word.current');
//   const currentLetter = document.querySelector('.letter.current');
//   const expected = currentLetter?.innerHTML || ' ';
//   const isLetter = key.length === 1 && key != ' ';
//   const isSpace = key === ' ';
//   const isBackspace = key === 'Backspace';
//   const isFirstLetter = currentWord.firstChild === currentLetter;
//   const isEnter = key === 'Enter';

//   if (isEnter) {
//     clearInterval(window.timer); 
//     window.timer = null; 
//     window.gameStart = null; 
//     removeClass(document.getElementById('type'), 'over'); 
//     newGame();
//     const cursor = document.getElementById('cursor');
//     const nextWord = document.querySelector('.word.current');
//     cursor.style.top = nextWord.getBoundingClientRect().top + 2 + 'px';
//     cursor.style.left = nextWord.getBoundingClientRect().left + 'px';
//     return; 
//   }

//  if (document.querySelector('#type.over')) {
//      return;
//  }

//   console.log({key,expected});

//   if (!window.timer && isLetter) {
//     window.timer = setInterval(() => {
//       if(window.gameStart === null) {
//         window.gameStart = (new Date()).getTime();
//       }
//       const currentTime = (new Date()).getTime();
//       const msPassed = currentTime - window.gameStart;
//       const sPassed = Math.round(msPassed / 1000);
//       const sLeft = (gametime / 1000) - sPassed;
//       if (sLeft <= 0) {
//         gameOver();
//         return;
//       }
//       document.getElementById('timer').innerHTML = sLeft;
//     }, 1000);
    
//   }


//   if (isLetter) {
//     if(currentLetter){
//       addClass(currentLetter, key === expected ? 'correct' : 'incorrect')
//       removeClass(currentLetter, 'current');
//       if (currentLetter.nextSibling){
//         addClass(currentLetter.nextSibling, 'current')
//       }
//     }
//     else{
//       const incorrectLetter = document.createElement('span');
//       incorrectLetter.innerHTML = key;
//       incorrectLetter.className = 'letter incorrect extra';
//       currentWord.appendChild(incorrectLetter);
//     }
//   }
//   if (isSpace){
//     if(expected !== ' '){
//     const lettersToinvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
//     lettersToinvalidate.forEach(letter => {
//       addClass(letter, 'incorrect');
//     });
//   }
//   removeClass(currentWord, 'current');
//   addClass(currentWord.nextSibling, 'current');
//   if (currentLetter) {
//     removeClass(currentLetter, 'current');
//   }
//   addClass(currentWord.nextSibling.firstChild, 'current');
// }

// //backspace
// if (isBackspace){
//   if(currentLetter && isFirstLetter){
//     removeClass(currentWord, 'current');
//     addClass(currentWord.previousSibling, 'current');
//    removeClass(currentLetter, 'current');
//    addClass(currentWord.previousSibling.lastChild, 'current');
//    removeClass(currentWord.previousSibling.lastChild, 'correct');
//     removeClass(currentWord.previousSibling.lastChild, 'incorrect');
// }
// if (currentLetter && !isFirstLetter){
//   removeClass(currentLetter, 'current');
//   addClass(currentLetter.previousSibling, 'current');
//   removeClass(currentLetter.previousSibling, 'correct');
//   removeClass(currentLetter.previousSibling, 'incorrect');
// }
// if(!currentLetter){
//   addClass(currentWord.lastChild, 'current');
//   removeClass(currentWord.lastChild, 'correct');
//   removeClass(currentWord.lastChild, 'incorrect');
// }
// }


// //move lines /words
// if (currentWord.getBoundingClientRect().top > 325) {
//   const words = document.getElementById('words');
//   const margin = parseInt(words.style.marginTop || '0px');
//   words.style.marginTop = (margin-45) + 'px';
// }


// //cursor
// const nextLetter = document.querySelector('.letter.current');
// const nextWord = document.querySelector('.word.current');
// const cursor = document.getElementById('cursor');
// if (nextLetter) {
//   cursor.style.top = nextLetter.getBoundingClientRect().top + 2 + 'px';
//   cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
// }
// else{
//   cursor.style.top = nextWord.getBoundingClientRect().top + 2 + 'px';
//   cursor.style.left = nextWord.getBoundingClientRect().right + 'px';
// }
// });


// newGame();



