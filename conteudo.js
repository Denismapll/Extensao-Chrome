window.addEventListener("load", function(event) {
    
    const tofBut = document.querySelector(".col-sm-6");
    const trueOrFalse = document.createElement("button");
    const filtro = document.createElement("span")
    const contador = document.createElement("span")
    
    var allSpan = document.querySelectorAll("span");
    var value = 0;

    contador.innerHTML = " - 0"
    filtro.innerHTML = "Filtro CT"
    // trueOrFalse.type = "checkbox";
    trueOrFalse.innerHTML = "Filtrar"
    trueOrFalse.style.margin = "5px 10px 5px 20px"
    trueOrFalse.style.border = "1px solid"
    trueOrFalse.style.backgroundColor = "rgb(0,140,186)"
    trueOrFalse.style.color = "white"
    trueOrFalse.style.borderRadius = "10px"
    let real = false;

    tofBut.appendChild(trueOrFalse);
    tofBut.appendChild(filtro);
    tofBut.appendChild(contador);

    function comparation(x) {
        
        x.forEach((i)=>{
            i.getAttribute("title")
            if (i.getAttribute("title") == null || i.getAttribute("title") == "CENTRAL POSITIVO" ) {
            } else {
                // console.log(i.getAttribute("title"))

                if (i.getAttribute("title").slice(0, 2) == "CT") {
                    // console.log("TEM CT")
                    i.parentElement.parentElement.style.display = "none"
                    value += 1;
                    contador.innerHTML = " - "+ value + " Filtrados"
                } else {
                }
            }
        })
        
    }

    trueOrFalse.addEventListener('click', ()=>{
        if (real) {
            real = false;
        } else {
            real = true;   

             allSpan = document.querySelectorAll("span");

            // console.log(allSpan[51].getAttribute("title"))
            comparation(allSpan)
        }
        // console.log(real == true)
        })

        
        
  });