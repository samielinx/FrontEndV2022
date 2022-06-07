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
    "Calificacion": "4/5",
    "UrlImagen" : "https://phantom-marca.unidadeditorial.es/9f301bc41f5a50141c37ed0bf2dc84d3/assets/multimedia/imagenes/2019/07/13/15630369390961.jpg"
}
const cancion2 = {
    "Nombre" : "Sweet Home Alabama",
    "Artista" : "Lynyrd Skynyrd",
    "Duracion" : "4:50",
    "Album" : "Skynyrd Nation",
    "Año" : "1999",
    "Calificacion": "3/5",
    "UrlImagen" : "https://dojiw2m9tvv09.cloudfront.net/36300/product/lyna8802.jpg"
}
const cancion3 = {
    "Nombre" : "One",
    "Artista" : "Metallica",
    "Duracion" : "7:50",
    "Album" : "And Justyce For All",
    "Año" : "1985",
    "Calificacion": "5/5",
    "UrlImagen" : "https://gcdn.emol.cl/los-80/files/2022/05/91bPNobxcEL._SY500_.jpg"
}

const canciones = [cancion1, cancion2, cancion3]

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
    div.id = element.Nombre
    //div.style.height = "250px"

    //Nombre de la Cancion
    const name = document.createElement("h3");
    name.className = "card-title";
    name.classList.add("text-center")
    name.innerHTML = element.Nombre

    //Artist
    const artist = document.createElement("p");
    artist.className = "fst-italic";
    artist.classList.add("text-center") 
    artist.innerHTML = element.Artista
    
    //Imagen
    const img = document.createElement("img")
    img.src = element.UrlImagen
    img.className ="img-fluid"
    img.classList.add("img-thumbnail")
    img.style.width = "100px"
    img.style.margin ="0 auto"

    //Duracion
    const dur = document.createElement("p")
    dur.innerHTML = "Duracion: " + element.Duracion
    dur.className = "text-center"
    dur.classList.add("fst-italic")
    dur.classList.add("m-2")

    //Año
    const year = document.createElement("h5")
    year.innerHTML = element.Año
    year.className = "text-center"

    //Calificacion
    const rating = document.createElement("div")
    rating.className="text-center"
    for (let index = 0; index < 5; index++) {
        const star = document.createElement("span")
        star.className = "fa"
        star.classList.add("fa-star")
        star.style.color = "orange"
        rating.appendChild(star)
    }

    div.addEventListener("mouseenter", function(e){
        div.classList.add("shadow")
        console.log(e.target)
    })

    div.addEventListener("mouseleave", function(e){
        div.classList.remove("shadow")
        console.log(e.target)
    })

    const btnBorrar = document.createElement("button")
    btnBorrar.className = "btn"
    btnBorrar.classList.add("btn-outline-danger")
    btnBorrar.innerHTML = "Borrar Cancion"
    btnBorrar.classList.add("m-2")


    btnBorrar.addEventListener("click", function(){
        rootCanciones.removeChild(div)
    })

    //div.addEventListener("click", Alerta())

    div.appendChild(name)
    div.appendChild(artist);
    div.appendChild(img)
    div.appendChild(dur)
    div.appendChild(year)
    div.appendChild(rating)
    div.appendChild(btnBorrar)
    rootCanciones.appendChild(div)
}

function Alerta(){
    alert("Click en la Card")
}
