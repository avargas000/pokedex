console.log("Poke-pokemon")

let button = document.getElementById('fire');
let content = document.getElementById('content');
let image = document.getElementById('image1');
// /let container = document.getElementByClassName('container');
button.addEventListener('click', function(){
  content.innerText = "SPITTTINGGG FIREEEEEEE";
  content.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('burn.png')";
  cont.style.backgroundSize = "cover";
  image2.style.display = "none"; /*squirtle pic*/
  image3.style.display = "none"; /*jiggly pic*/
  button2.style.display = "none";  /*squirtle button*/
  sleep.style.display = "none"; /*jiggly button*/
  content2.style.display = "none"; /*squirtle txt*/
  content3.style.display = "none";/*jiggly txt*/

})
let button2 = document.getElementById('water');
let content2 = document.getElementById('content2');
let image2 = document.getElementById('image2');
button2.addEventListener('click', function(){
  content2.innerText = "SPITTTINGGG WATERRR";
  content2.style.backgroundColor = "lightskyblue";
  cont.style.backgroundImage = "url('watah.png')";
  cont.style.backgroundSize = "cover";
  content.style.display = "none"; /*Charmander txt*/
  image.style.display = "none"; /*Charmander pic*/
  button.style.display = "none";  /*Charmander button*/
  image3.style.display = "none"; /*jiggly pic*/
  content3.style.display = "none"; /*jiggly txt*/
  sleep.style.display = "none";
})
let button3 = document.getElementById('sleep');
let content3 = document.getElementById('content3');
let image3 = document.getElementById('image3');
sleep.addEventListener('click', function(){
  content3.innerText = "SPITTTINGGG MELODIEZ";
  content3.style.backgroundColor = "gray";
  cont.style.backgroundImage = "url('sleep.png')";
  cont.style.backgroundSize = "cover";
  content.style.display = "none"; /*Charmander txt*/
  image.style.display = "none"; /*Charmander pic*/
  button.style.display = "none";  /*Charmander button*/
  image2.style.display = "none"; /*squirtle pic*/
  button2.style.display = "none";  /*squirtle button*/
  content2.style.display = "none"; /*squirtle txt*/

});
let change = document.getElementById('pokedexbutton');
let content4 = document.getElementById('content4');
let blue = document.getElementById('blue');
// let container = document.getElementByClassName('container');
change.addEventListener('click', function(){
  content4.innerText = "OH SNAP!";
  // content4.innerTextSize = "25px" ??
  content4.style.backgroundColor = "orange";
  // content4.style.display = "block" ??
  cont.style.backgroundColor = "black";
  // cont.style.backgroundSize = "cover";
  image2.style.display = "inline-block"; /*squirtle pic*/
  image3.style.display = "inline-block"; /*jiggly pic*/
  button2.style.display = "inline-block";  /*squirtle button*/
  sleep.style.display = "inline-block"; /*jiggly button*/
  content2.style.display = "inline-block"; /*squirtle txt*/
  content3.style.display = "inline-block";/*jiggly txt*/
  content.style.display = "inline-block"; /*Charmander txt*/
  image1.style.display = "inline-block"; /*Charmander pic*/
  fire.style.display = "inline-block";  /*Charmander button*/
})
;
