/* 
MIT license
Colour Click

Copyright (c) 2021 by Chris Gannon (https://codepen.io/chrisgannon/pen/qZmgRN)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  container = select(".container");

//
if (isTouchDevice()) {
  select("p").innerHTML = "THIS PEN IS FOR MOUSE DEVICES ONLY";
  select("p").style.color = "#FFF";
}

TweenMax.set("p", {
  position: "absolute",
  top: "50%",
  left: "50%",
  xPercent: -50,
  yPercent: -50,
});

TweenMax.set("svg", {
  visibility: "visible",
});

TweenMax.set("#cursor", {
  transformOrigin: "0% 0%",
  scale: 0.067,
});

var tl = new TimelineMax();

function doClick(e) {
  document.body.onclick = null;
  var c = getRandomColour();
  randomSound();
  document.body.style.cursor = "none";
  TweenMax.set("#cursor", {
    alpha: 1,
  });
  var tl = new TimelineMax({
    onComplete: function () {
      TweenMax.set("#cursor", {
        scale: 0.067,
        rotation: 0,
        alpha: 0,
      });
      document.body.style.cursor = "auto";
      document.body.style.backgroundColor = c;
      document.body.onclick = doClick;
    },
  });
  tl.to("#cursor", 1, {
    scale: 30,
    transformOrigin: "50% 50%",
    rotation: 360,
    ease: Expo.easeIn,
  }).to(
    "#cursorFill",
    1,
    {
      fill: c,
    },
    "-=1"
  );

  select("p").style.visibility = "hidden";
}
document.body.onclick = doClick;

document.body.onmousemove = function (e) {
  //document.body.style.cursor = 'none';
  TweenMax.set("#cursor", {
    x: e.pageX,
    y: e.pageY,
  });
};

function getRandomColour() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
