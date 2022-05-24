let Joe = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York",
    PreferenciasMusicales: ["Rock","Metal","Cumbia"]
}
/* */
let Ann = {
    Name: "Ann",
    LastName: "Brige",
    Age: 15,
    City: "California",
    PreferenciasMusicales: ["Reggae","Electronica","Pop"]
}

let Neil = {
    Name: "Neil",
    LastName: "Mando",
    Age: 18,
    City: "Texas",
    PreferenciasMusicales: ["Pop","Reggaetton","Clasica"]
}

const people = [Joe, Ann, Neil]
/* const json = JSON.stringify(people);
console.log(json) */

// Retornar cantidad de personas Mayores de Edad:
let contadorMayores = 0;
for (let i = 0; i < people.length; i++) {
    const p = people[i] // Joe
    if(p.Age >= 18){
        contadorMayores += 1; // contadorMayores = contadorMayores + 1
    }
}
//document.write(contadorMayores);
console.log("Cantidad de Mayores de Edad = " + contadorMayores);



// Retornar personas que prefieren el estilo musical POP
for (let i = 0; i < people.length; i++) {
    const p = people[i] //  Joe Ann Neil
    const ul = document.createElement("ul");
    const container = document.getElementById("container");
    for (let j = 0; j < p.PreferenciasMusicales.length; j++) {
        if(p.PreferenciasMusicales[j] == "Pop"){
            const li = document.createElement("li");
            li.innerText = p.Name + " Prefiere el Pop"
            //console.log(p.Name + " Prefiere el Pop");
            ul.appendChild(li);
        }
    }
    container.appendChild(ul);
}
