let nombretxt = document.getElementById("pokemosn-name");
let typeslist = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
 .then((response) => response.json())
 .then((pokemon) => {
 //console.log(pokemon.name);
 nombretxt.innerText = pokemon.name;
let lista = document.createElement("ul");
for(let i=0;i< pokemon.types.length;i++){
    const tipo = pokemon.types[i];
    let item = document.createElement("li")

}


 console.log(pokemon.types);
 //console.log(pokemon.sprites.front_default);

 image.setAttribute("src",pokemon.sprites.front_defaul);

 })
 .catch((error) => console.error(error));