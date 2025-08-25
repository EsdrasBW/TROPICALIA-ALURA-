document.addEventListener('DOMContentLoaded', function() {
   const botãodeAcessibilidade = document.getElementById('botão-acessibilidade')
   const opçõesdeAcessibilidade = document.getElementById('opções-acessibilidade')

   botãodeAcessibilidade.addEventListener('click', function () {
   botãodeAcessibilidade.classList.toggle('rotação-botão')
   opçõesdeAcessibilidade.classList.toggle('apresenta-lista')

   })



    const aumentaFonteBotão = document.getElementById('aumentar-fonte');
     const diminuiFonteBotão = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotão.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'

    })
    
    diminuiFonteBotãoFonteBotão.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'

    })

})