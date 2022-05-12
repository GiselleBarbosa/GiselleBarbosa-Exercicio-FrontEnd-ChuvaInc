function LeiaMais() {
  var pontos = document.getElementById("pontos");
  var maisTexto = document.getElementById("mais");
  var VerMais = document.getElementById("btnLeiaMais");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "Ver Mais";
  } else {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiaMais.innerHTML = "Ver Menos";
  }
}
