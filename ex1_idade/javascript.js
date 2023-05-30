function horas() {

    var mensagem = document.getElementById('msghora')
    var paragrafo = document.getElementById('paragrafo')
    var imagem = document.getElementById('img')
    var h1 = document.getElementById('horariododia')
    var rodape = document.getElementById('vitor')
    var fundoS = document.getElementById('fundoSection')

    var data = new Date()
    var minutos = data.getMinutes()
    var horas = data.getHours()

    if (horas >= 0 && horas < 6) {

        if (horas == 0) {
            imagem.src = 'imagens/madrugada.png'
            document.body.style.background = '#030b22'
            h1.style.backgroundColor = '#062A73'
            fundoS.style.backgroundColor = '#062A73'
            rodape.style.backgroundColor = '#062A73'

            paragrafo.innerHTML = 'Boa Noite!'
            mensagem.innerHTML = `Agora são ${horas}:${minutos} da noite`
        }

        else {
        // BOA MADRUGADA
        imagem.src = 'imagens/madrugada.png'
        document.body.style.background = '#030b22'
        h1.style.backgroundColor = '#284173'
        fundoS.style.backgroundColor = '#284173'
        rodape.style.backgroundColor = '#284173'

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
        document.body.style.background = '#E68545'
        h1.style.backgroundColor = '#FCB13F'
        fundoS.style.backgroundColor = '#FCB13F'
        rodape.style.backgroundColor = '#FCB13F'

        paragrafo.innerHTML = 'Boa Tarde!'
        mensagem.innerHTML = `Agora são ${horas}:${minutos} da tarde`
    }

    else {
        
        // BOA NOITE 
        if (horas == 20 || horas == 21 || horas == 22 || horas == 23){
            imagem.src = 'imagens/noite2.png'
            document.body.style.background = '#0D0D0D'
            h1.style.backgroundColor = '#353540'
            fundoS.style.backgroundColor = '#353540'
            rodape.style.backgroundColor = '#353540'

            paragrafo.innerHTML = 'Boa Noite!'
            mensagem.innerHTML = `Agora são ${horas}:${minutos} da noite`

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

}