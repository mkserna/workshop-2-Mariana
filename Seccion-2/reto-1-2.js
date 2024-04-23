const clima = prompt("1.Lluvioso / 2.Soleado")
const energia = confirm("¿Tienes energía?")
const cargaTrabajo = confirm("¿Tienes trabajo pendiente?")

if (!energia && !cargaTrabajo) {
    console.log('Puedes descansar');
} else {
    if (energia && cargaTrabajo) {
        console.log('Ponte a trabajar');
    } else if (!energia && cargaTrabajo) {
        console.log('Descansa un momento y luego ponte a trabajar');
    } else {
        if (clima === "1" && energia) {
            console.log('Puedes ver una pelicula');
        } else if (clima === "2" && energia) {
            console.log('Sal a caminar');
        }
    }
}
