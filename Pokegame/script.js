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

let pokemonList = [];
let TeamList = new Array(6);
let len = 0;

getPokemonData("pikachu");

function pokemon(name, spriteUrl, types, pokedexEntry) {
    this.name = name;
    this.spriteUrl = spriteUrl;
    this.types = types;
    this.pokedexEntry = pokedexEntry;
}

function updateTeamCount() {
    const label = document.getElementById("teamCount");
    if (label) label.textContent = `${len} / 6 Pokémon`;
}

async function getPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error("Pokémon not found!");

        const data = await response.json();
        currentPokemon = data.name;

        const pokedexEntry = data.id;
        const types = data.types.map((t) => t.type.name);
        let imageUrl = isShiny ? data.sprites.front_shiny : data.sprites.front_default;

        const newPokemon = new pokemon(currentPokemon, imageUrl, types, pokedexEntry);
        pokemonList.push(newPokemon);

        pokemonOutput.textContent = `#${String(pokedexEntry).padStart(3, '0')} ${currentPokemon.toUpperCase()}`;
        pokemonType.textContent = `Type: ${types.join(' / ')}`;
        pokemonImage.src = imageUrl;
    } catch (error) {
        pokemonOutput.textContent = error.message;
        pokemonType.textContent = '';
        pokemonImage.src = '';
    }
}

document.getElementById("searchButton").addEventListener("click", () => {
    const name = pokemonInput.value.trim();
    if (name) getPokemonData(name);
});

pokemonInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const name = pokemonInput.value.trim();
        if (name) getPokemonData(name);
    }
});

shinyButton.addEventListener("click", () => {
    isShiny = !isShiny;
    getPokemonData(currentPokemon || "pikachu");
});

clearButton.addEventListener("click", () => {
    document.getElementById("Team").innerHTML = "";
    TeamList = [];
    len = 0;
    updateTeamCount();
});

surpriseButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * 1024) + 1;
    (async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`);
            if (!response.ok) throw new Error("Pokémon not found!");
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
    if (len >= 6) return;
    if (!pokemonList.length) return;

    const latest = pokemonList[pokemonList.length - 1];
    TeamList.push(latest);
    len++;
    updateTeamCount();

    // Determine primary type class for card colour
    const primaryType = latest.types[0] || 'normal';
    const typeClass = `type-${primaryType}`;

    const card = document.createElement("div");
    card.classList.add("pokemon", typeClass);

    const name = document.createElement("p");
    name.textContent = `#${String(latest.pokedexEntry).padStart(3,'0')} ${latest.name.toUpperCase()}`;
    card.appendChild(name);

    const types = document.createElement("p");
    types.textContent = latest.types.join(' / ');
    card.appendChild(types);

    const img = document.createElement("img");
    img.src = latest.spriteUrl;
    img.alt = latest.name;
    card.appendChild(img);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        TeamList = TeamList.filter(p => p !== latest);
        card.remove();
        len--;
        updateTeamCount();
    });
    card.appendChild(removeBtn);

    document.getElementById("Team").appendChild(card);
});
