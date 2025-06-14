const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["limber", "imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
        hp: 48,
        attack: 48,
        defense: 48,
        special_attack: 48,
        special_defense: 48,
        speed: 48
    },
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    transform: function(){
    return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
    },
    get_ablity: function(){
        return this.abilities[Math.floor(Math.random() * (this.abilities.length))]
    }
};

document.querySelector(".name").innerHTML=ditto.name;
document.querySelector(".ability").innerHTML=ditto.get_ablity();
const pokemon_img = document.querySelector(".pokemon_img");
pokemon_img.setAttribute("src", ditto.sprite);
pokemon_img.setAttribute("alt", "ditto");

pokemon_img.addEventListener('click', (event) => {
    ditto.transform();
    pokemon_img.setAttribute("src", ditto.sprite);
    pokemon_img.setAttribute("alt", "shiny ditto");

})