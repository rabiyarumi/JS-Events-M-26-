// add onclick options

// option No- 1:- Inline : dirrecly set on the html element

// option no- 2:- button er moddhe kono onclick er moddhe kono ekta function k call kore dibo
// we will use it most of the time
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option no- 3.1:- id k variable a rekhe  function diye call kora
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue; // function name er sathe baricate [()] use kora jabe na
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option no- 3.2:- id k variable a rekhe  function diye call kora
const makePurpelBtn = document.getElementById("make-purpel");
makePurpelBtn.onclick = function makePurpel() { //ekhane function er nam diclare korleo hoy na korleo hoy
  document.body.style.backgroundColor = "purple";
};


//option-4.1:- add-Even-Listner
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option-4.2:- add-Even-Listner
const greenBtn = document.getElementById("make-green");
greenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//option-4.3:- add-Even-Listner
//we will use it sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor= 'goldenrod'
})
