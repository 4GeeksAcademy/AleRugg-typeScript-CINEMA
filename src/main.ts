
// Crea una sala de 8 filas y 10 columnas con todos los asientos libres.
function inicializarAsientos(): number[][] {
  const asientos: number[][] = [];

  for (let fila = 0; fila < 8; fila++) {
    asientos[fila] = [];

    for (let columna = 0; columna < 10; columna++) {
      asientos[fila][columna] = 0;
    }
  }

  return asientos;
}

// Muestra las coordenadas y el estado de cada asiento sin modificar la sala.
function mostrarSala(asientos: number[][]): void {
  let encabezado = "    ";

  for (let columna = 0; columna < asientos[0].length; columna++) {
    encabezado += "C" + (columna + 1) + " ";
  }

  console.log(encabezado);

  for (let fila = 0; fila < asientos.length; fila++) {
    let linea = "F" + (fila + 1) + "  ";

    for (let columna = 0; columna < asientos[fila].length; columna++) {
      if (asientos[fila][columna] === 1) {
        linea += "X  ";
      } else {
        linea += "L  ";
      }
    }

    console.log(linea);
  }
}

// Valida las coordenadas y reserva el asiento solo si esta libre.
function reservarAsiento(asientos: number[][], fila: number, columna: number): void {
  if (
    fila < 1 ||
    fila > asientos.length ||
    columna < 1 ||
    columna > asientos[0].length ||
    fila % 1 !== 0 ||
    columna % 1 !== 0
  ) {
    console.log(
      "Error: indica una fila entera del 1 al 8 y una columna entera del 1 al 10."
    );
    return;
  }

  if (asientos[fila - 1][columna - 1] === 1) {
    console.log("No se puede reservar: el asiento ya esta ocupado.");
    return;
  }

  asientos[fila - 1][columna - 1] = 1;
  console.log("Reserva realizada: F" + fila + ", C" + columna + ".");
}

// Cuenta los asientos ocupados y disponibles sin modificar la sala.
function contarAsientos(asientos: number[][]): void {
  let ocupados = 0;
  let disponibles = 0;

  for (let fila = 0; fila < asientos.length; fila++) {
    for (let columna = 0; columna < asientos[fila].length; columna++) {
      if (asientos[fila][columna] === 1) {
        ocupados++;
      } else {
        disponibles++;
      }
    }
  }

  console.log("Asientos ocupados: " + ocupados);
  console.log("Asientos disponibles: " + disponibles);
}

// Busca dos asientos libres consecutivos en la misma fila sin reservarlos.
function buscarAsientosContiguos(asientos: number[][]): void {
  for (let fila = 0; fila < asientos.length; fila++) {
    for (let columna = 0; columna < asientos[fila].length - 1; columna++) {
      if (
        asientos[fila][columna] === 0 &&
        asientos[fila][columna + 1] === 0
      ) {
        console.log(
          "Asientos contiguos disponibles: F" + (fila + 1) +
          ", C" + (columna + 1) + " y C" + (columna + 2) + "."
        );
        return;
      }
    }
  }

  console.log("No se encontraron suficientes asientos contiguos");
}

const salaVacia: number[][] = inicializarAsientos();

const salaParcialmenteVacia: number[][] = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

const salaCasiLlena: number[][] = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
];

const salaLlena: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const salaParCentral: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Prueba 1: sala vacia.
console.log("Prueba 1: Sala vacia");
mostrarSala(salaVacia);
contarAsientos(salaVacia);
buscarAsientosContiguos(salaVacia);

// Prueba 2: sala con cinco asientos ocupados.
console.log("Prueba 2: Sala parcialmente vacia");
mostrarSala(salaParcialmenteVacia);
reservarAsiento(salaParcialmenteVacia, 1, 1);
contarAsientos(salaParcialmenteVacia);
buscarAsientosContiguos(salaParcialmenteVacia);

// Prueba 3: dejar solo asientos libres separados por asientos ocupados.
console.log("Prueba 3: Sala con asientos libres separados");
mostrarSala(salaCasiLlena);
contarAsientos(salaCasiLlena);
buscarAsientosContiguos(salaCasiLlena);

// Prueba 4: sala llena.
console.log("Prueba 4: Sala llena");
mostrarSala(salaLlena);
contarAsientos(salaLlena);
buscarAsientosContiguos(salaLlena);

// Prueba 5: unico par libre cerca del centro.
console.log("Prueba 5: Par libre en el centro");
mostrarSala(salaParCentral);
contarAsientos(salaParCentral);
buscarAsientosContiguos(salaParCentral);

export {};
