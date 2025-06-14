const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

const image = document.querySelector(".image");
const card_name = document.querySelector(".name");
const card_class = document.querySelector("#class");
const level = document.querySelector("#level");
const health = document.querySelector("#health");

function refresh() {
    image.setAttribute("src", character.image);
    card_name.innerHTML=character.name;
    card_class.innerHTML=character.class;
    level.innerHTML=character.level;
    health.innerHTML=character.health;
}

refresh();

document.querySelector("#attacked").addEventListener("click", (event) => {
  character.attacked();
  refresh();
});

document.querySelector("#levelup").addEventListener("click", (event) => {
  character.levelUp();
  refresh();
});