let destino = {
    pais: ["Mexico", "Brasil", "Bolivia"],
    presupuestoPais: {
        Mexico: 100000,
        Brasil: 250000,
        Bolivia: 150000
    }
};

const eleccion = prompt(`Elige tu destino: ${destino.pais}`)
let dias = parseInt (prompt("Ingrese la cantidad de días que durará ti viaje: "));

let presupuesto = {
alojamiento: parseInt (prompt("Ingrese su presupuesto para el alojamiento: ")),
transporte: parseInt (prompt("Ingrese su presupuesto para el transporte: ")),
actividades: parseInt (prompt("Ingrese su presupuesto para las actividades: "))
}

let presupuestoTotal = (presupuesto.actividades + presupuesto.alojamiento + presupuesto.transporte) * dias

console.log(`Tu destino es ${eleccion} \ Te vas a quedar ${dias} días \ Tu presupuesto total es: ${presupuestoTotal}`);

if (presupuestoTotal < destino.presupuestoPais[eleccion]){
console.log("No puedes viajar")
}else console.log(`Puedes viajar. Bienvenido a ${eleccion}`);