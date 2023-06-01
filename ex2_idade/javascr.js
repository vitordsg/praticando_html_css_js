function enviar() {

    let data = new Date() // PEGA A DATA ATUAL
    let ano = data.getFullYear() // PEGA O ANO ATUAL COM 4 NUMEROS 2023
    let anoNascimento = document.getElementById('txtnascimento')
    let resul = document.querySelector('div#resultado')
    
    // PERGUNTA ANTES DE ENVIAR OS DADOS SE A CAIXA DE ANO DE NASCIMENTO EXISTE ALGUM VALOR OU O ANO E MAIOR QUE O ANO ATUAL
    if (anoNascimento.value.length != 4 || Number(anoNascimento.value) > ano || Number(anoNascimento.value < 1900)) {
        alert('[ERRO] Insira os dados corretamente')
        anoNascimento.value = ''
        anoNascimento.focus()
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
                //resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src','../ex2_idade/imagem/bebem.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade >= 5 && idade < 10) {

                faixa = 'Criança'
                //resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/criançam.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade <= 18) {
                faixa = 'Adolescente'
                //resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/jovemm.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade < 50) {
                faixa = 'Jovem Adulto'
                //resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src', '../ex2_idade/imagem/adultom.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else {
                faixa = 'Idoso'
                //resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src' , '../ex2_idade/imagem/idosom.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }
        }

        if(sexo[1].checked) {
            genero = 'Feminino'
            
            if(idade >= 0  && idade <= 5) {
            faixa = 'Bebê'
            //resul.innerHTML = `É um ${faixa} do Gênero ${genero} de ${idade} anos<br>`
            img.setAttribute('src', '../ex2_idade/imagem/bebef.png')
            anoNascimento.value = ''
            anoNascimento.focus()
            }

            else if (idade >= 5 && idade <= 10) {
                faixa = 'Criança'
                //resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src' , '../ex2_idade/imagem/criançaf.png')
                anoNascimento.value = ''
                anoNascimento.focus()

            }

            else if (idade <= 18) {
                faixa = 'Adolescente'
                //resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src' , '../ex2_idade/imagem/jovemf.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else if (idade < 50) {
                faixa = 'Jovem Adulto'
                //resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src' , '../ex2_idade/imagem/adultof.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }

            else {

                faixa = 'Idosa'
                //resul.innerHTML = `É uma ${faixa} do Gênero ${genero} de ${idade} anos<br>`
                img.setAttribute('src' , '../ex2_idade/imagem/idosof.png')
                anoNascimento.value = ''
                anoNascimento.focus()
            }
        }

        resul.innerHTML = `É um(a) ${faixa} do Gênero ${genero} de ${idade} anos!`
        resul.appendChild(img)
        
    }
}