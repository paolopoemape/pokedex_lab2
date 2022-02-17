
function getPokemons(){

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
          json.results.forEach(function(json){
        pokemonData(json)
      })

        });
};

function pokemonData(pokemonData){
  let url = pokemonData.url
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(pokemonData){
    let pokedata = ""

    let bgcontainer = document.getElementById('pokemons')

    // console.log(pokemonData)
    // for (let i = 0; i < pokemonData.length; i++){
    let pokeContainer = document.createElement("div")
    let pokeskills = document.createElement("div")//div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('card');
    let pokeName = document.createElement('h2')
    let pokes_container = document.createElement('p')
    hp = "HP:" + pokemonData.stats[0].base_stat + ", "
    attack = "Attack:" + pokemonData.stats[1].base_stat + ", "
    defense = "Defense:" +pokemonData.stats[2].base_stat
    pokeName.innerText = pokemonData.name
    let pokeImage = document.createElement('img')
    pokeImage.setAttribute('src',pokemonData.sprites.front_default)
    pokes_container.append(hp,attack,defense)
    pokeskills.append(pokes_container)
    pokeContainer.append(pokeName,pokeImage, pokeskills)
    bgcontainer.appendChild(pokeContainer);

  });

};



getPokemons();
