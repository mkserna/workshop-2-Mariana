const espacioMaleta = confirm("¿Tienes espacio en la maleta?")

if (!espacioMaleta){
    alert("No puedes llevar nada más")
} else {
    const limitePesoMaleta = parseInt(prompt("¿Cual es el peso maximo permitido? en kg"))
    const clima = prompt("Como está el clima hoy (1.Lluvioso / 2.Soleado)")
    if (limitePesoMaleta > 30){
        console.log();("!Puedes llevar lo que quieras¡")
        if (clima === "1"){
            alert("Puedes llevar un sueter");
        } else if (clima === "2"){
            alert("Lleva bloqueador");
        }
    }else if (limitePesoMaleta > 15 && limitePesoMaleta < 30){
        console.log("Te falta poco para llenar la maleta")
        if (clima === "1"){
            alert("Puedes llevar un gorro");
        } else if (clima === "2"){
            alert("Lleva un sombrero");
        }
    }else if (limitePesoMaleta = 0 && limitePesoMaleta < 15){
        console.log("Empieza a empacar tu maleta")
        if (clima === "1"){
            alert("Puedes llevar un botas de lluvia");
        } else if (clima === "2"){
            alert("Lleva sandalias");
        }
    }
}