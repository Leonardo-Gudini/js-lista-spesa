const listaSpesa =  [
                        "pane",
                        "formaggio",
                        "uova",
                        "latte",
                        "biscotti",
                        "pasta",
                        "pomodori",
                        "zucchine",
                    ]

list = document.getElementById("list")

i = 0

console.log(listaSpesa)

while( i < listaSpesa.length){
    console.log(listaSpesa[i])
    

    list.innerHTML += `<li>${listaSpesa[i]}</li> `;
    
    i++
}

