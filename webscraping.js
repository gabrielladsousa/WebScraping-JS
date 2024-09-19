//Autora: Gabriella de Sousa
//Web Scraping que pega todas as porcentagens de sucesso de cada episódio do jogo "Amor Doce" e realiza os seguintes cálculos: 
//quantidade de episódios, menor valor, maior valor, média. 
//No final, o programa atualiza a página para que todos os episódios tenham porcentagem de sucesso 100%

let spans = document.querySelectorAll(".value");
let progressBar = document.querySelectorAll(".ng-star-inserted");
let valores = [];
let soma = 0;
let qtd_episodios = 0;

//Converte a string para float
for (let i = 0; i < spans.length; i++) {
  let valor = parseFloat(spans[i].innerHTML);
  valores.push(valor);
}

let menorValor = valores[0];
let maiorValor = valores[0];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] < menorValor) {
    menorValor = valores[i];
  }
  if (valores[i] > maiorValor) {
    maiorValor = valores[i];
  }
  soma = soma + valores[i];
  qtd_episodios = qtd_episodios + 1;    
}

let media = soma/valores.length;
console.log("Quantidade de episódios: " + qtd_episodios);
console.log("Menor valor: " + menorValor + "%");
console.log("Maior valor: " + maiorValor + "%");
console.log("Média: " + media.toFixed(2) + "%");

//Muda a porcentagem de todo o site para 100%
for (let i = 0; i < spans.length; i++) {
  spans[i].innerHTML = "100 %";
}
//Muda a barra de progresso para 100%
for (let i = 0; i < progressBar.length; i++) {
  progressBar[i].style.width = "100%";
}   
