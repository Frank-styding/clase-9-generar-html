function createCardTemplate(title, description, imageSrc) {
  return `<div><div class="card " style="width: 18rem;">
    <img class="card-img-top" alt="..." src = "${imageSrc}"/>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text"> ${description}
      </p>
    </div>
  </div></div>`;
}

class Product {
  constructor(description, title, imageSrc) {
    this.description = description;
    this.title = title;
    this.imageSrc = imageSrc;
  }
}
let products = [
  new Product(
    "mouse de jugador, mouse de imice Función 4: Ratón de computadora con cable, ratón de PC 5 Ratón LED rgb",
    "Wired Gaming Mosue Game Ratón ergonómico Mause Usb",
    "https://i.linio.com/p/fba4931dc059568a0949c608429d41cf-product.jpg"
  ),
  new Product(
    "Teclado Super Cool: este producto tiene una apariencia hermosa, un gran rendimiento.",
    "G101 Teclado Cable de teclado 61-Key Eje verde Luminoso RGB Fresco Teclado mecánico",
    "https://i.linio.com/p/ec356599420e1fcbda431c53bc6d4a79-product.jpg"
  ),
];
function render() {
  let cards = document.getElementById("cards");
  cards.innerHTML = "";
  products.forEach((product) => {
    cards.innerHTML += createCardTemplate(
      product.title,
      product.description,
      product.imageSrc
    );
  });
}
render();
