// Esta función se utiliza en los 3 ejercicios. Por favor no comentarla
const isNumber = (number) => {
  while (isNaN(number)) {
    number = parseInt(
      prompt("Ha ingresado un valor NO numérico. Inténtelo de nuevo")
    );
  }
  return number;
};

// Algoritmo con condicional

let numeroEsPar = isNumber(
  parseInt(prompt("Ingrese un número para determinar si es par o impar"))
);

if (numeroEsPar % 2 === 0) console.log(`${numeroEsPar} es par`);
else console.log(`${numeroEsPar} es impar`);

// Algoritmo con condicional y ciclos

/* let notaMayor = 0;
let alumnoMayorNota = 0;

let cantNotas = isNumber(
  parseInt(prompt("Ingrese la cantidad de alumnos para ingresar sus notas"))
);

console.group("Alumnos y sus notas:");
for (let i = 0; i < cantNotas; i++) {
  let nota = isNumber(
    parseInt(prompt(`Ingrese la nota del alumno ${i} (Entre 1 y 10)`))
  );
  while (nota < 1 || nota > 10) {
    nota = isNumber(
      parseInt(
        prompt(
          `Ha ingresado un valor inválido. Ingrese nuevamente la nota del alumno ${i}`
        )
      )
    );
  }
  if (nota > notaMayor) {
    notaMayor = nota;
    alumnoMayorNota = i;
  }

  console.log(`Alumno ${i} - Nota: ${nota}`);
}
console.groupEnd();
console.log(
  `El alumno ${alumnoMayorNota} obtuvo la mayor nota de ${notaMayor}`
); */

// Simulador interactivo

/* let option;
let cantTotalProductos = 0,
  subtotal = 0,
  precioFinal = 0;

const calcularPrecio = (precioUnitario, nombreProducto) => {
  let cantProd = isNumber(
    parseInt(prompt(`Ingrese la cantidad de ${nombreProducto} a comprar`))
  );
  let precioCantidad = precioUnitario * cantProd;

  cantTotalProductos += cantProd;
  subtotal += precioCantidad;

  return precioCantidad;
};

console.group("Lista de productos y sus precios finales");
do {
  option = parseInt(
    prompt(
      "Bienvenido al minimercado. ¿Qué desea comprar?\n0) Finalizar compra\n1) Coca-Cola 3L ($3800 c/u)\n2) Yerba Mate ($1800 c/u)\n3) Manzana roja ($2800 x Kg)\n4) Chocolate Cofler ($1500 c/u)\n5) Papel higienico ($1850 c/ pack de 4 unidades)\n6) Lavandina 2L ($1400 c/u)\n7) Aceite de oliva 500cc ($10000 c/u)\n8) Jabón de tocador ($800 c/u) "
    )
  );
  switch (option) {
    case 0:
      break;
    case 1:
      console.log(`Coca-Cola 3L: $${calcularPrecio(3800, "Coca-Cola 3L")}`);
      break;
    case 2:
      console.log(`Yerba Mate: $${calcularPrecio(1800, "Yerba Mate")}`);
      break;
    case 3:
      console.log(`Manzana roja: $${calcularPrecio(2800, "Manzana roja")}`);
      break;
    case 4:
      console.log(
        `Chocolate Cofler: $${calcularPrecio(1500, "Chocolate Cofler")}`
      );
      break;
    case 5:
      console.log(
        `Papel higienico: $${calcularPrecio(1850, "Papel higienico")}`
      );
      break;
    case 6:
      console.log(`Lavandina 2L: $${calcularPrecio(1400, "Lavandina 2L")}`);
      break;
    case 7:
      console.log(
        ` Aceite de oliva 500cc: $${calcularPrecio(
          10000,
          " Aceite de oliva 500cc"
        )}`
      );
      break;
    case 8:
      console.log(
        `Jabón de tocador: $${calcularPrecio(800, "Jabón de tocador")}`
      );
      break;
    default:
      alert("Opción inválida. Inténtelo de nuevo");
      break;
  }
} while (option !== 0);
if (cantTotalProductos === 0)
  console.log("No colocaste ningún producto en tu carrito");
console.groupEnd();

if (cantTotalProductos > 0) {
  let opcionPagar = isNumber(
    parseInt(
      prompt(
        `Ingrese como desea pagar:\n1) Pago único (0% interés)\n2) 3 pagos (15% de interés)\n3) 6 pagos (35% de interés)`
      )
    )
  );
  if (opcionPagar === 1) precioFinal = subtotal;
  else if (opcionPagar === 2) precioFinal = subtotal + subtotal * 0.15;
  else if (opcionPagar === 3) precioFinal = subtotal + subtotal * 0.35;
  alert("Al llevar al menos 10 productos, se le aplicará un descuento del 10%");
  console.group("Ticket");
  console.log(`Cantidad total de productos: ${cantTotalProductos}`);
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Método de pago: ${opcionPagar} pago(s)`);
  if (cantTotalProductos >= 10) precioFinal = precioFinal - precioFinal * 0.1;

  console.log(`Precio final: $${precioFinal}`);

  console.groupEnd();
} */
