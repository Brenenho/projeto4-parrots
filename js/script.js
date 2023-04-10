const imagens = []

let carta = parseFloat(prompt('Digite o valor entre 4 a 14'))
console.log(carta)

while (carta < 4 || carta%2 != 0 || carta > 14) {
    carta = prompt('Digite o valor entre 2 a 14')
}

function adicionarcartas() {
   const add = document.querySelector(".cartasespaco")
   
   for (let i = 0; i < carta; i++) {
    
    let numero = i + 1;
    
    imagens.push(numero)
    
    imagens.sort(comparador);
      
   }
   
   
   
   
   
   
   
   
   for (let index = 0; index < carta; index++) {
    
    let imagem = imagens[index]
    
    add.innerHTML += `
    <div onclick="virarCarta(this)" class="carta" data-test="card">
                    <div class="carta1 face">
                        <img src="./imagens/back.png" alt="" data-test="face-down-image">
                    </div>
                    <div class="carta2 back-face face">
                        <img src="./imagens/${imagem}.gif" alt="" data-test="face-up-image">
                    </div>
                </div>
    `
    
   }

   imagens.sort(comparador);
  
}

function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.add("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.add("back");
  }

function comparador() { 
    return Math.random() - 0.5; 
}


   
  




adicionarcartas();
virarCarta();
imagens.sort(comparador);