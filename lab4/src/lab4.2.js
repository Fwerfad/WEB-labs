async function Pokemon(url1) {
    let [response] = await Promise.all([fetch(url1)]);
    if (response.ok) {
        let [json] = await Promise.all([response.json()]);
        const name = ("<span>" + "Покемон: " + json.forms[0].name + "<br>" + "</span>"),
            abilities = ("<span>" + "Способности: " + json.abilities[0].ability.name + "<br>" + "</span>");
        let effect = [];
        for (let i = 0; i < json.abilities.length; i++) {
            let [response] = await Promise.all([fetch(json.abilities[i].ability.url)]);
            if (response.ok) {
                let json2 = await response.json();
                effect += "<span>" + "Cпособность: " + (json2.effect_entries[0].effect) + "<br>" + "</span>";
            } else return false;
        }
        let elem = document.getElementById("app");
        elem.innerHTML = name + abilities + effect;
        return true;
    }
    return false;
}

export default function getPokemonInfo(url) {
    if (!Pokemon(url)) {
        let elem = document.getElementById("app");
        elem.innerHTML = "ERROR";
    }

}

