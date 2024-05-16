const OPTIONS = [
  "0) Salir",
  "1) Comprar productos",
  "2) Ver carrito",
  "3) Modificar carrito",
  "4) Eliminar producto del carrito",
];
const PRODUCTS = [
  {
    nombre: "Coca-Cola 3L",
    precio: 3800,
    cantidad: 0,
  },
  {
    nombre: "Yerba mate 1 Kg",
    precio: 1800,
    cantidad: 0,
  },
  {
    nombre: "Chocolate Cofler",
    precio: 1500,
    cantidad: 0,
  },
  {
    nombre: "Jamón cocido",
    precio: 2700,
    cantidad: 0,
  },
  {
    nombre: "Jabón de tocador 1 u",
    precio: 800,
    cantidad: 0,
  },
  {
    nombre: "Papel higiénico - Pack x4",
    precio: 1850,
    cantidad: 0,
  },
  {
    nombre: "Lavandina 2 L",
    precio: 2400,
    cantidad: 0,
  },
  {
    nombre: "Aceite de oliva 500 cc",
    precio: 10000,
    cantidad: 0,
  },
  {
    nombre: "Lata de atún al natural 170 g",
    precio: 3750,
    cantidad: 0,
  },
];

let cart = [];

class Product {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const isNumber = (number) => {
  while (isNaN(number)) {
    number = parseInt(
      prompt("Ha ingresado un valor NO numérico. Inténtelo de nuevo")
    );
  }
  return number;
};

const isNotZero = (cantidad) => {
  while (cantidad === 0) {
    cantidad = isNumber(
      parseInt(
        prompt(
          "Ha ingresado una cantidad nula. Debe ingresar un valor mayor a 0"
        )
      )
    );
  }
  return cantidad;
};

const addProdInCart = () => {
  do {
    let prodOption = isNumber(
      parseInt(
        prompt(
          `¿Qué producto desea agregar a su carrito?\n${PRODUCTS.map(
            (prod, index) => `${index}) ${prod.nombre} | $${prod.precio} c/u`
          ).join("\n")}`
        )
      )
    );
    if (prodOption > PRODUCTS.length - 1) {
      alert(
        "El producto seleccionado no existe en el mercado. Inténtelo de nuevo"
      );
      continue;
    }

    let cantProd = isNumber(
      isNotZero(
        parseInt(
          prompt(
            `Ingrese la cantidad de ${PRODUCTS[prodOption].nombre} que desea llevar`
          )
        )
      )
    );

    let prod = new Product(
      PRODUCTS[prodOption].nombre,
      PRODUCTS[prodOption].precio,
      cantProd
    );
    let prodExistIndex = cart.findIndex(
      (cartProd) => cartProd.nombre === prod.nombre
    );

    if (prodExistIndex >= 0) {
      cart[prodExistIndex].cantidad += cantProd;
      return;
    }
    cart.push(prod);
  } while (confirm("¿Desea seguir agregando productos al carrito?"));
};

const showCart = () => {
  if (cart.length > 0) {
    console.group("Su carrito de compras hasta ahora:");
    cart.forEach((prod) =>
      console.log(
        `${prod.nombre} | Cantidad: ${prod.cantidad} | Precio total: $${
          prod.precio * prod.cantidad
        }`
      )
    );
    console.groupEnd();
  } else console.log("Aún no agregó productos a su carrito");
};

const editCart = () => {
  if (cart.length === 0) {
    alert("Aún no agregó productos a su carrito");
    return;
  }
  do {
    let prodOption = isNumber(
      parseInt(
        prompt(
          `¿De qué producto desea editar la cantidad de su carrito?\n${cart
            .map(
              (prod, index) =>
                `${index}) ${prod.nombre} | Cantidad: ${prod.cantidad} unidades`
            )
            .join("\n")}`
        )
      )
    );
    if (prodOption > cart.length - 1) {
      alert(
        "El producto seleccionado no existe en el carrito. Inténtelo de nuevo"
      );
      continue;
    }
    let nombreProd = cart[prodOption].nombre;

    let cantProd = isNumber(
      isNotZero(
        parseInt(
          prompt(
            `Ingrese la cantidad de ${cart[prodOption].nombre} que desea llevar`
          )
        )
      )
    );

    cart.forEach((prod) => {
      if (prod.nombre === nombreProd) prod.cantidad = cantProd;
    });
  } while (confirm("¿Desea seguir modificando productos en su carrito?"));
};

const deleteProdFromCart = () => {
  if (cart.length === 0) {
    alert("Aún no agregó productos a su carrito");
    return;
  }

  let prodOption = isNumber(
    parseInt(
      prompt(
        `¿Qué producto desea eliminar de su carrito?\n${cart
          .map(
            (prod, index) =>
              `${index}) ${prod.nombre} | Cantidad: ${prod.cantidad} unidades`
          )
          .join("\n")}`
      )
    )
  );
  let prodNombre = cart[prodOption].nombre;
  cart = cart.filter((prod) => prod.nombre !== prodNombre);
  alert(`El producto ${prodNombre} ha sido borrado de su carrito`);
};

do {
  let chosenOption = parseInt(
    prompt(
      `Bienvenido al minimercado. ¿Qué desea hacer? \n${OPTIONS.join("\n")}`
    )
  );
  switch (chosenOption) {
    case 1:
      addProdInCart();
      break;
    case 2:
      showCart();
      break;
    case 3:
      editCart();
      break;
    case 4:
      deleteProdFromCart();
      break;
    default:
      alert("Opción inválida. Inténtelo de nuevo");
      break;
  }
} while (confirm("¿Desea realizar otra acción?"));

if (cart.length === 0) {
  console.log("No realizó compras. ¡Que tenga un buen día!");
}

alert("Si lleva al menos 30 productos, se le aplica un descuento del 10%");
let cantTotalProductos = cart.reduce((total, prod) => total + prod.cantidad, 0);
let subtotal = cart.reduce(
  (total, prod) => total + prod.cantidad * prod.precio,
  0
);

let precioFinal;
if (cantTotalProductos >= 30) precioFinal = subtotal - subtotal * 0.1;
else precioFinal = subtotal;

console.group("Ticket - Minimercado");
console.log(`Cantidad total de productos: ${cantTotalProductos}`);

cart.forEach((prod) =>
  console.log(
    `${prod.nombre} | Cantidad: ${prod.cantidad} | Precio total: ${
      prod.cantidad * prod.precio
    }`
  )
);

console.log("----------------------");
console.log(`Subtotal $${subtotal}`);
console.log(`Precio final: $${precioFinal}`);
console.groupEnd();
