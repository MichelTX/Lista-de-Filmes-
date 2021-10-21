var listaNomes = [
  "Dr.No",
  "From Russia with Love",
  "Goldfinger",
  "Thunderball"
];

var listaFilmes = [
  "https://c8.alamy.com/comp/HEHF60/sean-connery-poster-james-bond-dr-no-1962-HEHF60.jpg",
  "https://i.pinimg.com/originals/f6/dc/aa/f6dcaa3a2c8dce05b5e1848e6f889911.jpg",
  "https://cdn.shopify.com/s/files/1/1416/8662/products/goldfinger_R67_sweden_original_film_art_600x.jpg?v=1613634422",
  "https://i.pinimg.com/originals/f1/8c/d4/f18cd4e0f876b1bccf166df24f426370.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.getElementById("listaFilmes").innerHTML +=
    '<div class="divFilmes">' +
    "<img src=" +
    listaFilmes[i] +
    ">" +
    "<br>" +
    listaNomes[i] +
    "<br>" +
    "</div>";
}

function adicionarFilme() {
  var novoFilme = document.getElementById("filme").value;
  var novoNome = document.getElementById("nomeFilme").value;

  if (listaFilmes.includes(novoFilme) || listaNomes.includes(novoNome)) {
    document.getElementById("erro").innerHTML +=
      "Este filme já foi adicionado. ";
  } else if (novoFilme.endsWith(".jpg") && novoNome !== "") {
    listaNomes.push(novoNome);
    listaFilmes.push(novoFilme);
    listarFilmesNaTela(novoFilme);
  } else {
    document.getElementById("erro").innerHTML +=
      "Endereço inválido ou preencha o nome do filme. ";
  }

  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var elementoNomeFilme = document.getElementById("nomeFilme").value;
  elementoListaFilmes.innerHTML =
    '<div class="divFilmes2">' +
    "<br>" +
    elementoFilmeFavorito +
    "<br>" +
    elementoNomeFilme +
    "<br>" +
    elementoListaFilmes.innerHTML +
    "</div>";
}