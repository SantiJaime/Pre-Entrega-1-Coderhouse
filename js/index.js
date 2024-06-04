const PRODUCTS = [
  {
    id: 100,
    nombre: "Coca-Cola 3L",
    precio: 3800,
    cantidad: 1,
    img: "../imgs/productos/cocacola.webp",
  },
  {
    id: 101,
    nombre: "Yerba mate 1 Kg",
    precio: 1800,
    cantidad: 1,
    img: "../imgs/productos/yerba.webp",
  },
  {
    id: 102,
    nombre: "Chocolate Cofler",
    precio: 1500,
    cantidad: 1,
    img: "../imgs/productos/chocolate.jpg",
  },
  {
    id: 103,
    nombre: "Jamón cocido",
    precio: 2700,
    cantidad: 1,
    img: "../imgs/productos/jamon.jpg",
  },
  {
    id: 104,
    nombre: "Jabón de tocador 1 u",
    precio: 800,
    cantidad: 1,
    img: "../imgs/productos/jabon.jpg",
  },
  {
    id: 105,
    nombre: "Papel higiénico - Pack x4",
    precio: 1850,
    cantidad: 1,
    img: "../imgs/productos/papel.jpg",
  },
  {
    id: 106,
    nombre: "Lavandina 2 L",
    precio: 2400,
    cantidad: 1,
    img: "../imgs/productos/lavandina.webp",
  },
  {
    id: 107,
    nombre: "Aceite de oliva 500 cc",
    precio: 10000,
    cantidad: 1,
    img: "../imgs/productos/aceite.webp",
  },
  {
    id: 108,
    nombre: "Lata de atún al natural 170 g",
    precio: 3750,
    cantidad: 1,
    img: "../imgs/productos/atun.jpg",
  },
  {
    id: 109,
    nombre: "Leche entera 1 L",
    precio: 1200,
    cantidad: 1,
    img: "../imgs/productos/leche.png",
  },
  {
    id: 110,
    nombre: "Pan de molde",
    precio: 1500,
    cantidad: 1,
    img: "../imgs/productos/pan.webp",
  },
  {
    id: 111,
    nombre: "Queso cremoso 500g",
    precio: 4000,
    cantidad: 1,
    img: "../imgs/productos/queso.webp",
  },
  {
    id: 112,
    nombre: "Galletas de chocolate",
    precio: 900,
    cantidad: 1,
    img: "../imgs/productos/galletas.webp",
  },
  {
    id: 113,
    nombre: "Café instantáneo 200g",
    precio: 2500,
    cantidad: 1,
    img: "../imgs/productos/cafe.jpg",
  },
  {
    id: 114,
    nombre: "Azúcar 1 Kg",
    precio: 800,
    cantidad: 1,
    img: "../imgs/productos/azucar.jpg",
  },
  {
    id: 115,
    nombre: "Harina de trigo 1 Kg",
    precio: 700,
    cantidad: 1,
    img: "../imgs/productos/harina.webp",
  },
  {
    id: 116,
    nombre: "Arroz 1 Kg",
    precio: 1100,
    cantidad: 1,
    img: "../imgs/productos/arroz.jpg",
  },
  {
    id: 117,
    nombre: "Fideos spaghetti 500g",
    precio: 1300,
    cantidad: 1,
    img: "../imgs/productos/fideos.webp",
  },
  {
    id: 118,
    nombre: "Puré de tomate 500g",
    precio: 950,
    cantidad: 1,
    img: "../imgs/productos/tomate.webp",
  },
  {
    id: 119,
    nombre: "Mayonesa 500g",
    precio: 1700,
    cantidad: 1,
    img: "../imgs/productos/mayonesa.jpg",
  },
];

localStorage.setItem("products", JSON.stringify(PRODUCTS));

const addProdInCart = (id) => {
  let cartLS = JSON.parse(localStorage.getItem("cart")) || [];

  const prodExistIndex = cartLS.findIndex((prod) => prod.id === id);

  if (prodExistIndex !== -1) {
    const updatedProduct = {
      ...cartLS[prodExistIndex],
      cantidad: cartLS[prodExistIndex].cantidad + 1,
    };

    cartLS.splice(prodExistIndex, 1, updatedProduct);
    alert(`Ha agregado 1 unidad más de ${updatedProduct.nombre} a su carrito`);
  } else {
    const prod = PRODUCTS.find((prod) => prod.id === id);
    cartLS.push(prod);

    alert(`El producto ${prod.nombre} ha sido agregado al carrito`);
  }
  localStorage.setItem("cart", JSON.stringify(cartLS));
};

const divProducts = document.querySelector("#divProducts");
const searchProd = document.querySelector("#searchProd");

const showProducts = (productos) => {
  divProducts.innerHTML = "";
  productos.forEach((prod) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-3 col-md-6 col-sm-6 my-3";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card text-white bgCards";

    const img = document.createElement("img");
    img.src = prod.img;
    img.className = "card-img-top";
    img.alt = prod.nombre;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = prod.nombre;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = `$${prod.precio}`;

    const button = document.createElement("button");
    button.className = "btn btn-light w-100 add-prod";
    button.innerText = "Agregar al carrito";
    button.setAttribute("idProd", prod.id);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);

    divProducts.appendChild(colDiv);
  });
  const addProdButtons = document.querySelectorAll(".add-prod");

  addProdButtons.forEach((button) => {
    button.addEventListener("click", (ev) => {
      const idProd = parseInt(ev.target.getAttribute("idProd"));
      addProdInCart(idProd);
    });
  });
};

const searchProduct = (ev) => {
  const { value } = ev.target;

  const filteredProducts = PRODUCTS.filter((prod) => {
    let nombre = prod.nombre.toLowerCase();
    return nombre.includes(value.toLowerCase());
  });

  if (filteredProducts.length > 0) showProducts(filteredProducts);
  else {
    divProducts.innerHTML = `<h3 class="text-center">No se encontraron resultados</h3>`;
  }
};

showProducts(PRODUCTS);

searchProd.addEventListener("input", searchProduct);
