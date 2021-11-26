function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //aqui só será mostrado se o ano for menor que o atual
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else 
    {
        var fsex = document.getElementsByName('radsex') // selecionando o sexo da pessoa
        var idade = ano - Number(fano.value) //calculo da idade , o getFullYear e faz menos o ano indicado pelo usuario
        var gênero = ''
        var img = document.createElement('img') //pegando a imagem
        img.setAttribute('id', 'foto') //mesmo que fosse fazer no html
        if (fsex[0].checked) {
            gênero = 'homem'

            if (idade >=0 && idade < 15) {
                //criança
                img.setAttribute('src', 'img/homem_crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/homem_adolecente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/homem_idoso.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'mulher'

            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/mulher_crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/mulher_adolecente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher_adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que é ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}
