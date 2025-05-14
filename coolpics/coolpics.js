const menu_button = document.querySelector(".menu_button");
const menu = document.querySelector("nav");
const gallery = document.querySelector(".gallery");

const modal = document.createElement("dialog");
modal.innerHTML = `<img><button class="close_viewer">X</button>`;
document.body.append(modal);
const modalImage = document.querySelector("dialog img");
const close_button = document.querySelector(".close_viewer")

function hideMenu() {
    if (menu.classList.contains("hide")){
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function handleResize() {
    if (window.innerWidth >= 1000){
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

function openModal(event) {
    let clickedImage = event.target.closest("img");
    let imgSrc = clickedImage.getAttribute("src").split("-")[0].concat("-full.jpeg");
    let imgAlt = clickedImage.getAttribute("alt");
    modalImage.setAttribute("src", imgSrc);
    modalImage.setAttribute("alt", imgAlt);
    modal.showModal();    
}


handleResize();




menu_button.addEventListener("click", hideMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", openModal)
close_button.addEventListener("click", (event) => {
    modal.close();
})
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
})