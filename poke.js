console.log("Poke-pokemon")


let button = document.getElementById('fire');
let content = document.getElementById('content');
let image = document.getElementById('image1');
// /let container = document.getElementByClassName('container');
button.addEventListener('click', function(){
  content.innerText = "SPITTTINGGG FIREEEEEEE";
  content.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('flame.gif')";
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
  // image2.background-image:url("jigglymuv.png");
  cont.style.backgroundImage = "url('wet.gif')";
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
  cont.style.backgroundImage = "url('cloudy.gif')";
  cont.style.backgroundSize = "cover";
  content.style.display = "none"; /*Charmander txt*/
  image.style.display = "none"; /*Charmander pic*/
  button.style.display = "none";  /*Charmander button*/
  image2.style.display = "none"; /*squirtle pic*/
  button2.style.display = "none";  /*squirtle button*/
  content2.style.display = "none"; /*squirtle txt*/

});
// pokedex trainer button
let change = document.getElementById('pokedexbutton');
let content4 = document.getElementById('content4');
let blue = document.getElementById('blue');
// let container = document.getElementByClassName('container');
change.addEventListener('click', function(){
  content4.innerText = "OH SNAP!";
  // content4.innerTextSize = "25px" ??
  content4.style.backgroundColor = "orange";
  // content4.style.display = "block" ??
  cont.style.backgroundColor = "while";
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


// class Pokemon{
//   constructor(hp,attack, defense,abilities){
//     this.hp = hp;
//     this.name = name;
//     this.attack = attack;
//     this.defense = defense;
//
//   }
// }
//
// class Trainer {
//   get(all)
// }
//***************************CHARMANDER********************/////
function charResult(){
//let info1 = document.getElementById('image1');
let idk1 = document.getElementById('stats1');
let charmander = "http://fizal.me/pokeapi/api/v2/name/charmander.json";
axios.get(charmander)
  .then(function(response){
    let abi = response.data.stats[3].base_stat;
    idk1.innerHTML = abi;
    // let char = document.createElement('span');
    // let everything = [];
    // for ( let i = 0; i < abi.length ;i++){
    //   everything.push(abi[i].ability.name);
    //   char = everything;
    //   info1.innerHTML=(everything);
    // }
  })
}
//***************************SQUIRTLE********************/////
function squirtResult(){
//let info1 = document.getElementById('image1');
let idk2 = document.getElementById('stats2');
let squirtle = "http://fizal.me/pokeapi/api/v2/name/squirtle.json";
axios.get(squirtle)
  .then(function(response){
    let abi = response.data.stats[3].base_stat;
    idk1.innerHTML = abi;
    // let char = document.createElement('span');
    // let everything = [];
    // for ( let i = 0; i < abi.length ;i++){
    //   everything.push(abi[i].ability.name);
    //   char = everything;
    //   info1.innerHTML=(everything);
    // }
  })
}

// let pika = new Pokemon(pikaHP, name, )
//
// function mew(){
// let info2 = document.getElementById('pokemons2');
// let mew ="http://fizal.me/pokeapi/api/v2/name/mewtwo.json"
// axios.get(mew)
//   .then(function mew(response){
//   let abi2 = response.data.abilities;
//   let mew = document.createElement('span');
//   let all2 = [];
//   for(let i=0;i<abi2.length;i++){
//     all2.push(abi2[i].ability.name);
//     // mew = all2;
//     info2.innerHTML=(all2);
//     }
//   })
// }
//
// function snor(){
// let info3 = document.getElementById('pokemons3')
// let snorlax ="http://fizal.me/pokeapi/api/v2/name/snorlax.json"
// axios.get(snorlax)
//   .then(function snor(response){
//   let abi3 = response.data.abilities;
//   let snorlax = document.createElement('span');
//   let all3 = [];
//   for(let i=0;i<abi3.length;i++){
//     all3.push(abi3[i].ability.name);
//     snorlax = all3;
//     info3.innerHTML =(all3);
//     }
//   })
// }
  document.getElementById("fire").addEventListener("click", charResult);
  document.getElementById("water").addEventListener("click", squirtResult);
  // document.getElementById("mb").addEventListener("click", mew);
  // document.getElementById("sb").addEventListener("click", snor);
//
// class Charmander {
//   constructor(Hp,Attack, Defense, Abilities){
//     this.ClassName = Charmander;
//     this.Hp = Hp;
//     this.Attack = Attack;
//     this.Defense = Defense;
//     this.Ability = Ability;
//     this.url = url;
//     this.
//
//
//   };
