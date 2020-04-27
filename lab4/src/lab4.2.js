async function Pokemon(url1) {
    let response = await fetch(url1);
    if (!response.ok) {
        return false;
    }
    let json = await response.json();
    const name = ("<span>" + "Покемон: " + json.forms[0].name + "<br>" + "</span>");
    const abilities = ("<span>" + "Способности: " + json.abilities[0].ability.name + "<br>" + "</span>");
    var effect = [];
    for (let i = 0; i < json.abilities.length; i++) {
        let response = await fetch(json.abilities[i].ability.url);
        if (!response.ok) {
            return false;
        }
        let json2 = await response.json();
        effect += "<span>" + "Cпособность: " + (json2.effect_entries[0].effect) + "<br>" + "</span>";
    }
    let elem = document.getElementById("app");
    elem.innerHTML = name + abilities + effect;
    return true;
}

export default function getPokemonInfo(url) {
    if (Pokemon(url) == false) {
        let elem = document.getElementById("app");
        elem.innerHTML = "ERROR";
    }

}

