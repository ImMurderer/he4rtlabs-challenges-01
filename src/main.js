const formPage = document.querySelector("form");
const resultsPage = document.querySelector("#results");
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
  resultsPage.style.zIndex = 10;
  resultsPage.style.visibility = "visible";
};
formPage.addEventListener("submit", handleSubmit);
document
  .querySelector("#valorProjeto")
  .addEventListener("change", formatCurrency);
document.querySelector("#reset").addEventListener("click", e => {
  resultsPage.style.zIndex = -10;
});
