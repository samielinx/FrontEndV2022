// let var const

const root = document.getElementById("root");

const titulo = document.createElement("h1");
titulo.innerHTML = "Front End";
titulo.className = "text-center";

const subtitulo = document.createElement("p");
subtitulo.innerHTML = '"La mejor asignatura del primer semestre <strong>=)</strong>"';
subtitulo.className = "fst-italic"; //Asignacion
subtitulo.classList.add("text-center") //Method => Params

root.appendChild(titulo);
root.appendChild(subtitulo);

const cancion1 = {
    "Nombre" : "Hotel California",
    "Artista" : "The Eagles",
    "Duracion" : "5:04",
    "Album" : "Greatest Hits",
    "Año" : "1977",
    "Calificacion": "4/5"
}
const cancion2 = {
    "Nombre" : "Sweet Home Alabama",
    "Artista" : "Lynyrd Skynyrd",
    "Duracion" : "4:50",
    "Album" : "Skynyrd Nation",
    "Año" : "1999",
    "Calificacion": "3/5"
}
const cancion3 = {
    "Nombre" : "One",
    "Artista" : "Metallica",
    "Duracion" : "7:50",
    "Album" : "And Justyce For All",
    "Año" : "1985",
    "Calificacion": "5/5"
}
const cancion4 = {
    "Nombre" : "Hotel California",
    "Artista" : "The Eagles",
    "Duracion" : "5:04",
    "Album" : "Greatest Hits",
    "Año" : "1977",
    "Calificacion": "4/5"
}
const cancion5 = {
    "Nombre" : "Sweet Home Alabama",
    "Artista" : "Lynyrd Skynyrd",
    "Duracion" : "4:50",
    "Album" : "Skynyrd Nation",
    "Año" : "1999",
    "Calificacion": "3/5"
}
const cancion6 = {
    "Nombre" : "One",
    "Artista" : "Metallica",
    "Duracion" : "7:50",
    "Album" : "And Justyce For All",
    "Año" : "1985",
    "Calificacion": "5/5"
}

const canciones = [cancion1, cancion2, cancion3,cancion4, cancion5, cancion6]

const rootCanciones = document.createElement("div");
rootCanciones.className = "row"
rootCanciones.classList.add("justify-content-evenly")
rootCanciones.classList.add("mt-3")

root.appendChild(rootCanciones)

for (let index = 0; index < canciones.length; index++) {
    const element = canciones[index]; 
    
    const div = document.createElement("div");
    div.className = "col-md-3"
    div.classList.add("card")
    div.style.height = "250px"

    //Nombre de la Cancion
    const name = document.createElement("h3");
    name.className = "card-tittle";
    name.classList.add("text-center")
    name.innerHTML = element.Nombre

    div.appendChild(name)

    //Artist
    const artist = document.createElement("p");
    artist.className = "fst-italic";
    artist.classList.add("text-center") 
    artist.innerHTML = element.Artista

    div.appendChild(artist);
    rootCanciones.appendChild(div)
}


