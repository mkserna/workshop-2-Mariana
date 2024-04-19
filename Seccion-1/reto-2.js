let souvenirs = []

function data (nomSouvenir, costSouvenir, dispSouvenir) {
    const souvenir = {
        nomSouvenir : nomSouvenir,
        costSouvenir : costSouvenir,
        dispSouvenir : dispSouvenir,
    }
    souvenirs.push(souvenir)
}
var eleccion = confirm("Quieres ingresar un souvenir")
while(eleccion){
    
    let nomSouvenir = prompt("Ingresa el nombre del Souvenir: ")
    let costSouvenir = parseInt(prompt("Ingresa el costo del Souvenir: "))
    let dispSouvenir = prompt("Ingresa la disponibilidad del Souvenir (Si/No): ").toLocaleUpperCase

    if (dispSouvenir == "Si"){
        dispSouvenir = true
    }else if(dispSouvenir == "No"){
        dispSouvenir = false
    }
    
    data(nomSouvenir, costSouvenir, dispSouvenir);
    let eleccion2 = confirm("Quieres ingresar otro souvenir?")
    
    if (eleccion2 == false){
        console.log(souvenirs)
        break
    }
}