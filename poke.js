console.log("Poke-pokemon")

class Pokemon {
  constructor(name,hp,attack, defense, abilities){
    this.pokeName = name;
    this.Hp = hp;
    this.Attack = attack;
    this.Defense = defense;
    this.Abilities = abilities;
    this.container = document.querySelector(".charman");
    this.element =  document.createElement ("div");
    this.element.className = ("poke");
  }
  display(){
   pokeinfo = document.createElement("ol");
   pokeinfo.innerHTML = [this.pokeName ," HP: " + this.Hp ," Attack: " + this.Attack ," Defense: " + this.Defense ," Abilities: " + this.Abilities];
   this.element.appendChild(pokeinfo);
   console.log("pleasework")
   this.container.appendChild(this.element);
  }
}

  let pokeinfo;
  function charmander(){
    let charmanderURL ="http://fizal.me/pokeapi/api/v2/name/charmander.json";
    axios.get(charmanderURL)
      .then(function(response){
        let abi = response.data.abilities;
        let all1 = [];
        for(let i=0;i<abi.length;i++){
          all1.push(abi[i].ability.name);
        }

        let concatenate = "";
        for(let i=0;i<abi.length;i++){
          concatenate +=all1[i] + " ";
        }

        let name = "charmander";

        let hp = response.data.stats[5].base_stat;

        let attack = response.data.stats[4].base_stat;

        let defense = response.data.stats[3].base_stat;

        let charr = new Pokemon(name, hp, attack, defense, concatenate);

        document.getElementById('image3').style.display = "none";
        document.getElementById('content3').style.display = "none";

        charr.display();

     })
  }


console.log("STFU")
function squirts(){
  let squirtleURL ="http://fizal.me/pokeapi/api/v2/name/squirtle.json";
    axios.get(squirtleURL)
    .then(function squirts(response){



      let abi2 = response.data.abilities;
      let all2 = [];
      for(let i=0;i<abi2.length;i++){
        all2.push(abi2[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi2.length;i++){
        concatenate +=all2[i] + " ";
      }

      let name = "squirtle";

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      let squir = new Pokemon(name,hp,attack,defense,concatenate);

      document.getElementById('image3').style.display = "none";
      document.getElementById('image1').style.display = "none";

      squir.display();
    })
}


  // function squirts(){
  //   let squirtleURL ="http://fizal.me/pokeapi/api/v2/name/squirtle.json";
  //   axios.get(squirtleURL)
  //     .then(function squirts (response){
  //       let abi2 = response.data.abilities;
  //       let all2 = [];
  //       for(let i=0;i<abi2.length;i++){
  //         all2.push(abi2[i].ability.name);
  //
  //       }
  //
  //       let concatenate = "";
  //       for(let i=0;i<abi2.length;i++){
  //         concatenate +=all2[i] + " ";
  //       }
  //
  //       let name = "squirtle";
  //
  //       let hp = response.data.stats[5].base_stat;
  //
  //       let attack = response.data.stats[4].base_stat;
  //
  //       let defense = response.data.stats[3].base_stat;
  //
  //       let squirt = new Pokemon(name, hp, attack, defense, concatenate);

        // document.getElementById('image3').style.display = "none";
        // document.getElementById('content3').style.display = "none";

        // squirt.display();
console.log("STFU2")
  //    })
  // }



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
  charmander();

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
  // stats1.style.display = "none";
  // stats2.style.display = "none";
});
// pokedex trainer button
let change = document.getElementById('pokedexbutton');
let content4 = document.getElementById('content4');
let blue = document.getElementById('blue');
// let container = document.getElementByClassName('container');
change.addEventListener('click', function(){
  content4.innerText = "OH SNAP!";
  content4.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('blank.jpg')";
  cont.style.backgroundSize = "cover";
  image2.style.display = "inline-block"; /*squirtle pic*/
  image3.style.display = "inline-block"; /*jiggly pic*/
  button2.style.display = "inline-block";  /*squirtle button*/
  sleep.style.display = "inline-block"; /*jiggly button*/
  content2.style.display = "inline-block"; /*squirtle txt*/
  content3.style.display = "inline-block";/*jiggly txt*/
  content.style.display = "inline-block"; /*Charmander txt*/
  image1.style.display = "inline-block"; /*Charmander pic*/
  fire.style.display = "inline-block";  /*Charmander button*/
  // stats2.style.display = "none";
})
;



//
// class Trainer {
//   get(all)
// }
//***************************CHARMANDER********************/////
// function charResult(){
// let info1 = document.getElementById('image1');
// let idk1 = document.getElementById('stats1');
// let charmander = "http://fizal.me/pokeapi/api/v2/name/charmander.json";
// axios.get(charmander)
//   .then(function(response){
//     let def = response.data.stats["0","3"].base_stat; /*4=attack 3=defense 5=HP*/
//     idk1.innerHTML = "Attack" + def ;
//
//
//
//   })
// }
// //***************************SQUIRTLE********************/////
// function squirtResult(){
// // let info2 = document.getElementById('image2');
// let idk2 = document.getElementById('stats2');
// let squirtle = "http://fizal.me/pokeapi/api/v2/name/squirtle.json";
// axios.get(squirtle)
//   .then(function(response){
//     let def2 = response.data.stats[3].base_stat;
//     idk2.innerHTML = def2;
//
//   })
// }
// // **************************JIGGLY*************************
// function jigglyResult(){
// let info3 = document.getElementById('image3');
// let idk3 = document.getElementById('stats3');
// let jigglypuff = "http://fizal.me/pokeapi/api/v2/name/jigglypuff.json";
// axios.get(jigglypuff)
//   .then(function(response){
//     let def3 = response.data.stats[3].base_stat;
//     idk3.innerHTML = def3;
//
//   document.getElementById("fire").addEventListener("click", charResult);
//   document.getElementById("water").addEventListener("click", squirtResult);
//   document.getElementById("sleep").addEventListener("click", jigglyResult);
// })
// }

// class Pokemon {
//   constructor(Hp,Attack, Defense, Abilities){
//     this.ClassName = Charmander;
//     this.Hp = Hp;
//     this.Attack = Attack;
//     this.Defense = Defense;
//     this.Ability = Ability;
//     this.container = document.getElementByClassName("container");
//     this.element =  document.createElement ("div");
//     this.element.className = ("player");


//
//
//   };
