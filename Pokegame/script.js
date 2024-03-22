const pokemonInput = document.getElementById("pokemonInput");
const pokemonOutput = document.getElementById("pokemonOutput");
const pokemonType = document.getElementById("pokemonType");
const pokemonImage = document.getElementById("pokemonImage");
const shinyButton = document.getElementById("shinyButton");
const addButton = document.getElementById("addButton");
const surpriseButton = document.getElementById("surpriseButton");
const clearButton = document.getElementById("clearButton");

let currentPokemon = "pikachu";
let isShiny = false;

let pokemonList = new Array();
let TeamList = new Array(6);
let len = 0;


getPokemonData("pikachu");

function pokemon(name, spriteUrl, types, pokedexEntry) {
  this.name = name;
  this.spriteUrl = spriteUrl;
  this.types = types;
  this.pokedexEntry = pokedexEntry;
};

async function getPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokémon not found!");
    }
    
    const data = await response.json();
    currentPokemon = data.name;

    const pokedexEntry = data.id;
    const types = data.types.map((type) => type.type.name);
    let imageUrl = data.sprites.front_default;
    if (isShiny) {
      imageUrl = data.sprites.front_shiny;
    }
    const Newpokemon = new pokemon(currentPokemon, imageUrl, types, pokedexEntry);
    pokemonList.push(Newpokemon);

    pokemonOutput.textContent = `Pokedex Entry: #${pokedexEntry}`;
    pokemonType.textContent = `Type: ${types.join(', ')}`;
    pokemonImage.src = imageUrl;
  } catch (error) {
    pokemonOutput.textContent = error.message;
    pokemonType.textContent = '';
    pokemonImage.src = '';
  }
}

// buttons 

document.getElementById("searchButton").addEventListener("click", () => {
  const pokemonName = pokemonInput.value.trim();
  if (pokemonName !== "") {
    getPokemonData(pokemonName);
  }
});

shinyButton.addEventListener("click", () => {
  isShiny = !isShiny;
  const pokemonName = currentPokemon
  if (pokemonName) {
    getPokemonData(pokemonName);
  } else {
    getPokemonData("pikachu");
  }
});

clearButton.addEventListener("click", () => {
  const teamsDiv = document.getElementById("Team");
  teamsDiv.innerHTML = "";
  TeamList = [];
  len = 0;
});

surpriseButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 1024) + 1;
  (async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`);
      if (!response.ok) {
        throw new Error("Pokémon not found!");
      }
      const data = await response.json();
      getPokemonData(data.name);
    } catch (error) {
      pokemonOutput.textContent = error.message;
      pokemonType.textContent = '';
      pokemonImage.src = '';
    }
  })();
});

addButton.addEventListener("click", () => {

  if (len == 6) {
    console.log("Team is full");
    return;
  }

  if (pokemonList.length > 0) {
    const latestPokemon = pokemonList[pokemonList.length - 1];
    TeamList.push(latestPokemon);
    console.log("Added", latestPokemon.name, "to TeamList");
    len++;
    // Create a new div element for the Pokemon
    const newPokemonDiv = document.createElement("div");
    newPokemonDiv.classList.add("pokemon");

    // Populate the div with the Pokemon's attributes
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = `Name: ${latestPokemon.name}`;
    newPokemonDiv.appendChild(nameParagraph);

    const pokedexParagraph = document.createElement("p");
    pokedexParagraph.textContent = `Pokedex Entry: #${latestPokemon.pokedexEntry}`;
    newPokemonDiv.appendChild(pokedexParagraph);

    const typesParagraph = document.createElement("p");
    typesParagraph.textContent = `Type: ${latestPokemon.types.join(", ")}`;
    newPokemonDiv.appendChild(typesParagraph);

    const spriteImage = document.createElement("img");
    spriteImage.src = latestPokemon.spriteUrl;
    newPokemonDiv.appendChild(spriteImage);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      // Remove the Pokemon from TeamList
      TeamList = TeamList.filter(pokemon => pokemon.name !== latestPokemon.name);
      // Remove the Pokemon div from the DOM
      newPokemonDiv.remove();
      console.log("Removed", latestPokemon.name, "from TeamList");
      len--;
    });
    newPokemonDiv.appendChild(removeButton);

    // Append the new div to the "teams" div
    const teamsDiv = document.getElementById("Team");
    teamsDiv.appendChild(newPokemonDiv);
  } else {
    console.log("No pokemon available in pokemonList");
  }
});



