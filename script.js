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

            if (idade >=0 && idade < 2) {
                //homem_1 - crianca bb - 2020
                img.setAttribute('src', 'img/homem_1.png')
            } 
            
            else if (idade >=2 && idade < 5){
                //homem_2 - crianca - 2019
                img.setAttribute('src', 'img/homem_2.png')
            } 
            
            else if (idade >=5 && idade < 10) {
                //homem_3 - 
                img.setAttribute('src', 'img/homem_3.png')
            } 

            else if (idade >=10 && idade < 15) 
            {
                //homem_4
                img.setAttribute('src', 'img/homem_4.png')
            } 

            else if (idade >=15 && idade < 20) 
            {
                //homem_5
                img.setAttribute('src', 'img/homem_5.png')
            } 

            else if (idade >=20 && idade < 25) 
            {
                //homem_6
                img.setAttribute('src', 'img/homem_6.png')
            }

            else if (idade >=25 && idade < 55) 
            {
                //homem_7
                img.setAttribute('src', 'img/homem_7.png')
            }
            
            else 
            {
                //homem_8
                img.setAttribute('src', 'img/homem_8.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'mulher'

            if (idade >=0 && idade < 2) {
                //mulher_1 - crianca bb
                img.setAttribute('src', 'img/mulher_1.png')
            } 
            
            else if (idade >=2 && idade < 5){
                //mulher_2 - crianca 
                img.setAttribute('src', 'img/mulher_2.png')
            } 
            
            else if (idade >=5 && idade < 10) {
                //mulher_3 
                img.setAttribute('src', 'img/mulher_3.png')
            } 

            else if (idade >=10 && idade < 15) 
            {
                //mulher_4
                img.setAttribute('src', 'img/mulher_4.png')
            } 

            else if (idade >=15 && idade < 20) 
            {
                //mulher_5
                img.setAttribute('src', 'img/mulher_5.png')
            } 

            else if (idade >=20 && idade < 25) 
            {
                //mulher_6
                img.setAttribute('src', 'img/mulher_6.png')
            }

            else if (idade >=25 && idade < 55) 
            {
                //mulher_7
                img.setAttribute('src', 'img/mulher_7.png')
            }
            
            else 
            {
                //mulher_8
                img.setAttribute('src', 'img/mulher_8.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que é ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}
