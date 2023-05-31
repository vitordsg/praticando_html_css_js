function enviar() {

    let data = new Date() // PEGA A DATA ATUAL
    let ano = data.getFullYear() // PEGA O ANO ATUAL COM 4 NUMEROS 2023
    let anoNascimento = document.getElementById('txtnascimento')
    let resul = document.querySelector('div#resultado')
    

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        alert('ERRO')
    }

    else {
        
        
        let sexo = document.getElementsByName('radsexo') // PEGA QUAL SEXO ESTÁ MARCADO
        let idade = ano - Number(anoNascimento.value) // ANO DIGITADO - MENOS O ATUAL / DEVOLVENDO A IDADE DA PESSOA
        let genero = '' // GENERO COMEÇA VAZIO
        let faixa = ''  // FAIXA COMEÇA VAZIA
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')


        if (sexo[0].checked) { 
            genero = 'Masculino'
            
            if(idade >= 0 && idade < 5) {
                faixa2 = 'Menino'
                faixa = 'Bebê'
                resul.innerHTML = `É um ${faixa2} ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src','../ex2_idade/imagem/bebem.png')
            }

            else if (idade >= 5 && idade < 10) {
                faixa = 'Criança'
                resul.innerHTML = `É `
            }

        }

        resul.appendChild(img)
        
    }
}