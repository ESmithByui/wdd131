const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute(src, "https://picsum.photos/200")
newImage.setAttribute(alt, "https://picsum.photos/200")