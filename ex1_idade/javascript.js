function horas() {

    var mensagem = document.getElementById('msghora')
    var paragrafo = document.getElementById('paragrafo')
    var imagem = document.getElementById('img')
    var h1 = document.getElementById('horariododia')
    var rodape = document.getElementById('vitor')
    var fundoS = document.getElementById('fundoSection')

    var data = new Date()
    var minutos = data.getMinutes()
    var horas = 22

    if (horas >= 0 && horas < 6) {

        if (horas == 0) {
            imagem.src = 'imagens/madrugada.png'
            document.body.style.background = '#030b22'
            h1.style.backgroundColor = 'rgb(5, 194, 241)'
            rodape.style.backgroundColor = 'rgb(5, 194, 241)'

            paragrafo.innerHTML = 'Boa Noite!'
            mensagem.innerHTML = `Agora são ${horas}:${minutos} da noite`
        }

        else {
        // BOA MADRUGADA
        imagem.src = 'imagens/madrugada.png'
        document.body.style.background = '#030b22'
        h1.style.backgroundColor = 'rgb(5, 194, 241)'
        rodape.style.backgroundColor = 'rgb(5, 194, 241)'

        paragrafo.innerHTML = 'Boa madrugada!'
        mensagem.innerHTML = `Agora são ${horas}:${minutos} da manhã! `
        }
    }
    
    else if (horas >= 6 && horas < 12) {

        // BOM DIA
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#F2BF5E'
        h1.style.backgroundColor = '#F2D852'
        fundoS.style.backgroundColor = '#F2D852'
        rodape.style.backgroundColor = '#F2D852'

        paragrafo.innerHTML = 'Bom Dia!'
        mensagem.innerHTML = `Agora são ${horas}:${minutos} da manhã`
    }

    else if (horas >= 12 && horas < 18) {

        // BOA TARDE
        imagem.src = 'imagens/tarde.png'
        paragrafo.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#D9C979'
        h1.style.backgroundColor = '#F2E30C'
        fundoS.style.backgroundColor = '#F2E30C'
        rodape.style.backgroundColor = '#F2E30C'

        mensagem.innerHTML = `Agora são ${horas}:${minutos} da tarde`
    }

    else {

        // BOA NOITE
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#473959'
        h1.style.backgroundColor = '#64588C'
        paragrafo.innerHTML = "Boa Noite!"
        fundoS.style.backgroundColor = '#64588C'
        rodape.style.backgroundColor = '#64588C'
        mensagem.innerHTML = `Agora são ${horas}:${minutos} da noite`
        
    }

}