
let presupuestoInicial = parseInt(prompt("Ingresa tu presupuesto inicial: "))
let costViaje = parseInt(prompt("Ingresa el costo del viaje: "))
let dineroEmergencia = parseInt(prompt("¿Cuanto dinero tienes de emergencia?: "))

let listaArticulos = []



function nuevoArticulo (nombreArticulo, costoArticulo){
    const articulo = {
        nombre : nombreArticulo,
        costo: costoArticulo
    }
    listaArticulos.push(articulo)
}

let articuloExtra = confirm("¿Quieres llevar un artículo?")
while(articuloExtra){
    let nombreArticulo = prompt("¿Cual es el nombre del artículo?")
    let costoArticulo = parseInt(prompt(`¿Cuanto cuesta ${nombreArticulo}?`))
    nuevoArticulo(nombreArticulo, costoArticulo)
    articuloExtra = confirm("¿Quieres llevar otro artículo?")
}

console.log(listaArticulos);

let item = parseInt(prompt(`¿Cual articulo quieres llevar? 0-${listaArticulos.length-1}`))
let sumaCostos = costViaje + dineroEmergencia + listaArticulos[item].costo
let presupuestoRestante = presupuestoInicial - sumaCostos

console.log(presupuestoRestante);

if (presupuestoRestante < 0){
    alert("No puedes llevar el articulo")
    listaArticulos.forEach(element => {
        if(presupuestoInicial - costViaje - dineroEmergencia - element.costo){
            alert(`Coinsidera llevar ${element.nombre}`)
        }
    });
}else{
    alert("Puedes llevar el articulo")
}