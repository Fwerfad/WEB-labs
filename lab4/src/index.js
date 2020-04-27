import addName from './lab4.1.js';
import getPokemonInfo from './lab4.2.js';
const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
function addPokemon() {
    return getPokemonInfo(url);
}
onload = function loadPage() {
    document.getElementById("homeTab").onclick=addName;
    document.getElementById("pokemonTab").onclick=addPokemon;
    addName();
}
