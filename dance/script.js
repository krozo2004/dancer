
/* 
MIT license
Pure CSS The Carlton dance

Copyright (c) 2021 by Grzegorz Witczak (https://codepen.io/Wujek_Greg/pen/EpJwaj)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Pure CSS dance animation (no graphics included)

// Designed by Gustavo Viselner
// https://dribbble.com/shots/3979515-It-s-not-unusual

// Thanks for Una Kravets for Sass Pixel Art technique
// https://una.im/sass-pixel-art/

// Making time ~ 7 hours

// Some Js for audio toggle

const music = document.getElementById('music');
const body = document.querySelector('body');
const dancer = document.querySelector('.dancer');
const danceMoves = document.querySelector('.dance-frame');
let counter = 1;
const dancing = Array.from(danceMoves);
function eventHandler() {
  counter++;
  dancer.classList.add('hidden');
  music.pause();
  if (counter % 10 === 0) {
    dancer.classList.remove('hidden');
    music.play();
    counter = 0;
  }
};


body.addEventListener('click', eventHandler);


// var isPlaying = false;
// music.volume = 0.2;
// function togglePlay() {
//   if (isPlaying) {
//     music.pause()
//   } else {
//     music.play();
//   }
// };
// music.onplaying = function() {
//   isPlaying = true;
//   document.getElementById("music-animation").classList.add('on')
// };
// music.onpause = function() {
//   isPlaying = false;
//   document.getElementById("music-animation").classList.remove('on')
// };

// var button = document.getElementById("toggle");
// button.addEventListener('click', function() {
//   if (button.getAttribute("data-text-swap") == button.innerHTML) {
//     button.innerHTML = button.getAttribute("data-text-original");
//   } else {
//     button.setAttribute("data-text-original", button.innerHTML);
//     button.innerHTML = button.getAttribute("data-text-swap");
//   }
// }, false);
