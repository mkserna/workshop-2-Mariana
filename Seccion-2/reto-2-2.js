const presupuestoDiario = parseFloat(prompt("Ingresa tu presupuesto diario: "))
const ahorroMinDiario = parseFloat(prompt("Ingresa tu ahorro minimo diario: "))
const comerAfueraCosto = parseFloat(prompt("¿Cuanto te cuesta comer afuera?"))
const costoLibro = parseFloat(prompt("¿Cuanto te cuesta el costoLibro?"))

const presupuestoRestante = presupuestoDiario - ahorroMinDiario

if (presupuestoRestante < 0) {
    alert("Hoy no puedes ahorrar")
} else if (presupuestoDiario - (ahorroMinDiario + costoLibro) < 0 || presupuestoDiario - (ahorroMinDiario + comerAfueraCosto) < 0) {
    if (presupuestoDiario - (ahorroMinDiario + costoLibro) < 0 && presupuestoDiario - (ahorroMinDiario + comerAfueraCosto) < 0) {
        alert("Hoy no puedes comer afuera, ni comprar un libro")
    } else if (presupuestoDiario - (ahorroMinDiario + costoLibro) < 0) {
        alert("Hoy no puedes comprar un libro")
    } else if (presupuestoDiario - (ahorroMinDiario + comerAfueraCosto) < 0) {
        alert("Hoy no puedes comer afuera")
    }
} else if (presupuestoDiario - (ahorroMinDiario + comerAfueraCosto + costoLibro) > 0) {
    alert("¡Disfruta, puedes comprar todo!")
}