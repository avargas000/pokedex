console.log("I hate pokemon")

let button = document.getElementById('fire');
let content = document.getElementById('content');
let image = document.getElementById('image1');
// let container = document.getElementByClassName('container');
button.addEventListener('click', function(){
  content.innerText = "SPITTTINGGG FIREEEEEEE";
  content.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('burn.png')";
  cont.style.backgroundSize = "cover";
  image2.style.display = "none";
  button2.style.display = "none";
  image.style.display = "none";
  // document.getElementByClassName('container')[0].style.backgroundColor = "blue";
  // container.style.backgroundColor = "blue";
  //
  // image.src = "fire.jpg"

})
let button2 = document.getElementById('water');
let content2 = document.getElementById('content2');
let image2 = document.getElementById('image2');
button2.addEventListener('click', function(){
  content2.innerText = "SPITTTINGGG WATERRR";
  content2.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('pool.png')";
  cont.style.backgroundSize = "cover";
});
