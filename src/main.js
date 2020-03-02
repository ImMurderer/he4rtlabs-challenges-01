const formPage = document.querySelector("form");
const resultsPage = document.querySelector("#results");
const description = document.querySelector(".form-img p");

const texts = [
  `Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do 
  trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair.
  Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse
  fator em consideração.`,
  `Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto.
  Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de 
  confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para 
  lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.`,
  `Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e 
  não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente 
  na quantidade de dias que você deseja tirar "férias" com o valor total projeto.`,
  `Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir 
  desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.`,
  `O projeto tem a finalidade de descrever alguns fatores determinantes para você saber o seu valor 
  da sua hora em um freelance. Essas quatro variáveis, vão definir um bom jeito de você cotar alguns
  de seus trabalhos até você começar a ter uma noção maior do que fazer nesses momentos.`
];

const formatCurrency = e => {
  e.target.value = Number(e.target.value).toFixed(2);
};

const handleSubmit = e => {
  e.preventDefault();
  const entrys = {};

  document.querySelectorAll("input").forEach(v => {
    entrys[v.name] = v.value;
    v.value = "";
  });

  const { valorProjeto, diasEfetivos, horasDiarias, diasFerias } = entrys;
  const valorHora =
    valorProjeto / (diasEfetivos * 4 * horasDiarias) +
    diasFerias * diasEfetivos * horasDiarias;

  document.querySelector("#earnings").innerHTML = `R$ ${valorHora.toFixed(2)}`;

  formPage.style.visibility = "hidden";
  resultsPage.style.visibility = "visible";
  resultsPage.style.zIndex = 10;
};

const handleFocus = e => {
  switch (e.target.name) {
    case "horasDiarias":
      description.innerHTML = texts[0];
      break;
    case "diasEfetivos":
      description.innerHTML = texts[1];
      break;
    case "diasFerias":
      description.innerHTML = texts[2];
      break;
    case "valorProjeto":
      description.innerHTML = texts[3];
      break;
  }
};
formPage.addEventListener("submit", handleSubmit);

document
  .querySelector("#valorProjeto")
  .addEventListener("change", formatCurrency);

document.querySelector("#reset").addEventListener("click", e => {
  resultsPage.style.visibility = "hidden";
  resultsPage.style.zIndex = -10;
  formPage.style.visibility = "visible";
});

document.querySelectorAll("input").forEach(v => {
  v.addEventListener("focus", handleFocus);
  v.addEventListener("focusout", e => (description.innerHTML = texts[4]));
});
