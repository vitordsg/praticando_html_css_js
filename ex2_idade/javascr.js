function enviar() {

    let data = new Date() // PEGA A DATA ATUAL
    let ano = data.getFullYear() // PEGA O ANO ATUAL COM 4 NUMEROS 2023
    let anoNascimento = document.getElementById('txtnascimento')
    let resul = document.querySelector('div#resultado')
    
    // PERGUNTA ANTES DE ENVIAR OS DADOS SE A CAIXA DE ANO DE NASCIMENTO EXISTE ALGUM VALOR OU O ANO E MAIOR QUE O ANO ATUAL
    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        alert('ERRO')
    }

    else {
        
        
        let sexo = document.getElementsByName('radsexo') // PEGA QUAL SEXO ESTÁ MARCADO
        let idade = ano - Number(anoNascimento.value) // ANO DIGITADO - MENOS O ATUAL / DEVOLVENDO A IDADE DA PESSOA
        let genero = '' // GENERO COMEÇA VAZIO
        let faixa = ''  // FAIXA COMEÇA VAZIA
        var img = document.createElement('img') // CRIA UM ELEMENTO IMAGEM 'tagName'
        img.setAttribute('id', 'photo') // ADICIONA ATRIBUTOS AO ELEMENTO 'nomeDoAtributo' 'valorDoAtributo'


        if (sexo[0].checked) { 
            genero = 'Masculino'
            
            if(idade >= 0 && idade < 5) {

                faixa = 'Bebê'
                resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src','../ex2_idade/imagem/bebem.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade >= 5 && idade < 10) {

                faixa = 'Criança'
                resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/criançam.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade <= 18) {
                faixa = 'Adolescente'
                resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/jovemm.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade < 50)
                faixa = 'Jovem Adulto'
                resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/adultom.png')
                anoNascimento.value = ''
                anoNascimento.focus()
        }

        resul.appendChild(img)
        
    }
}