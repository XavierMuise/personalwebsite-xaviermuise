const pokemonInput = document.getElementById("pokemonInput");
const pokemonOutput = document.getElementById("pokemonOutput");
const pokemonType = document.getElementById("pokemonType");
const pokemonImage = document.getElementById("pokemonImage");
const shinyButton = document.getElementById("shinyButton");
let isShiny = false;

const pokemon = {
  name: "",
  spriteUrl: "",
  types: [],
  pokedexEntry: 0
};

async function getPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokémon not found!");
    }
    const data = await response.json();

    const pokedexEntry = data.id;
    const types = data.types.map((type) => type.type.name);
    let imageUrl = data.sprites.front_default;
    if (isShiny) {
      imageUrl = data.sprites.front_shiny;
    }

    pokemonOutput.textContent = `Pokedex Entry: #${pokedexEntry}`;
    pokemonType.textContent = `Type: ${types.join(', ')}`;
    pokemonImage.src = imageUrl;
  } catch (error) {
    pokemonOutput.textContent = error.message;
    pokemonType.textContent = '';
    pokemonImage.src = '';
  }
}

document.getElementById("searchButton").addEventListener("click", () => {
  const pokemonName = pokemonInput.value.trim();
  if (pokemonName !== "") {
    getPokemonData(pokemonName);
  }
});

shinyButton.addEventListener("click", () => {
  isShiny = !isShiny;
  const pokemonName = pokemonInput.value.trim();
  if (pokemonName) {
    getPokemonData(pokemonName);
  } else {
    getPokemonData("pikachu");
  }


});

