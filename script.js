function verificar() {
  const anoAtual = new Date().getFullYear();
  let anoFormulario = Number(document.getElementById("txtano").value);
  let res = document.querySelector("#res");

  if (anoFormulario == 0 || anoFormulario > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var sexoFormulario = document.getElementsByName("radsex");
    var idade = anoAtual - anoFormulario;
    var gênero = "";
    var img = document.createElement("img"); //Cria uma tag img
    img.width = 100;
    img.setAttribute("id", "foto"); //Criei um id foto

    if (sexoFormulario[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 13) {
        //CriançaM
        img.setAttribute("src", "./imagens/criancaM.png");
      } else if (idade < 18) {
        //AdolescenteM
        img.setAttribute("src", "./imagens/AdolescenteM.png");
      } else if (idade < 54) {
        //Adulto
        img.setAttribute("src", "./imagens/AdultoM.png");
      } else {
        //Idoso
        img.setAttribute("src", "./imagens/Idoso.png");
      }
    } else if (sexoFormulario[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 13) {
        //CriançaF
        img.setAttribute("src", "/imagens/criancaF.png");
      } else if (idade < 18) {
        //Adolescente
        img.setAttribute("src", "./imagens/AdolescenteF.png");
      } else if (idade < 54) {
        //Adulto
        img.setAttribute("src", "/imagens/AdultoF.png");
      } else {
        //Idosa
        img.setAttribute("src", "./imagens/Idosa.png");
      }
    }
  }
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
  res.appendChild(img);
}
