let aboutUs = {
  Missão: "<p>Lucas</p>",
  Visão:
    "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  Valores:
    "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>",
};

var about_tags = document.getElementsByClassName("single-tab");

console.log(about_tags);
for (var a = 0; a < about_tags.length; a++) {
  about_tags[a].onclick = function () {
    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
  };
}
