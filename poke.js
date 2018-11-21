console.log("Poke-pokemon")

class Pokemon {
  constructor(name,hp,attack, defense, abilities, statId){
    this.pokeName = name;
    this.Hp = hp;
    this.Attack = attack;
    this.Defense = defense;
    this.Abilities = abilities;


    this.container = document.getElementById(statId);
  }
  display(){
   pokeinfo = document.createElement("ol");
   pokeinfo.innerHTML = [this.pokeName ," HP: " + this.Hp ," Attack: " + this.Attack ," Defense: " + this.Defense ," Abilities: " + this.Abilities];

   console.log("pleasework", this)
   this.container.appendChild(pokeinfo);
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

        let charr = new Pokemon(name, hp, attack, defense, concatenate, "stats1");

        // document.getElementById('image3').style.display = "none";
        // document.getElementById('content3').style.display = "none";

        charr.display();

     })
  }

  function jiggly(){
    let jigglyURL ="http://fizal.me/pokeapi/api/v2/name/jigglypuff.json";
    axios.get(jigglyURL)
      .then(function(response){



        let abi3 = response.data.abilities;
        let all3 = [];
        for(let i=0;i<abi3.length;i++){
          all3.push(abi3[i].ability.name);
        }

        let concatenate = "";
        for(let i=0;i<abi3.length;i++){
          concatenate +=all3[i] + " ";
        }

        let name = "Jigglypuff";

        let hp = response.data.stats[5].base_stat;

        let attack = response.data.stats[4].base_stat;

        let defense = response.data.stats[3].base_stat;

        let jigglypf = new Pokemon(name, hp, attack, defense, concatenate, "stats3");

        // document.getElementById('image3').style.display = "none";
        // document.getElementById('content3').style.display = "none";

        jigglypf.display();

     })
  }


function squirts(){
  let squirtleURL ="http://fizal.me/pokeapi/api/v2/name/squirtle.json";
    axios.get(squirtleURL)
    .then(function(response){



      let abi2 = response.data.abilities;
      let all2 = [];
      for(let i=0;i<abi2.length;i++){
        all2.push(abi2[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi2.length;i++){
        concatenate +=all2[i] + " ";
      }

      let name = "Squirtle";

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      let squir = new Pokemon(name,hp,attack,defense,concatenate, "stats2");

      // document.getElementById('image3').style.display = "none";
      // document.getElementById('image1').style.display = "none";

      squir.display();
    })
}








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
  cont.style.backgroundImage = "url('wet.gif')";
  cont.style.backgroundSize = "cover";
  content.style.display = "none"; /*Charmander txt*/
  image.style.display = "none"; /*Charmander pic*/
  button.style.display = "none";  /*Charmander button*/
  image3.style.display = "none"; /*jiggly pic*/
  content3.style.display = "none"; /*jiggly txt*/
  sleep.style.display = "none";
  squirts();
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
  stats1.style.display = "none";
  stats2.style.display = "none";
  jiggly();
});
// pokedex trainer button
let change = document.getElementById('pokedexbutton');
let content4 = document.getElementById('content4');
let blue = document.getElementById('blue');
change.addEventListener('click', function(){
  content4.innerText = "OH SNAP!";
  content4.style.backgroundColor = "orange";
  cont.style.backgroundImage = "url('blank.jpg')";
  cont.style.backgroundSize = "cover";
  image2.style.display = "inline-block"; /*squirtle pic*/
  image3.style.display = "inline-block"; /*jiggly pic*/
  button2.style.display = "inline-block";  /*squirtle button*/
  sleep.style.display = "inline-block"; /*jiggly button*/
  content2.innerHTML = " "; /*squirtle txt*/
  content3.innerHTML = " ";/*jiggly txt*/
  content.innerHTML = " "; /*Charmander txt*/
  image1.style.display = "inline-block"; /*Charmander pic*/
  fire.style.display = "inline-block";  /*Charmander button*/
  stats1.innerHTML = " ";
  stats2.innerHTML = " ";
  stats3.innerHTML = " ";

})
;


class Trainer {
  constructor(name, age, gender, talent){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.abilities = talent;

   // console.log(it worked! ALL THE WAY DOWN!);
}
}

let someone = new Trainer("Blue", 12, "Non-Binary", "Fights stress");
console.log(someone);

function startanimation() {
  let key =  document.getElementById('slider')
  if (500 <= window.scrollY && 700 >= window.scrollY){
    key.className = "slider";


}
window.addEventListener("scroll", startanimation);
}
//
//
//   };
