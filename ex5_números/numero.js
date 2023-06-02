let numero = document.getElementById('txtnumero')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#resultado')
let valores = [] // ARRAY / VETOR




// PERGUNTA SE O NÚMERO ESTÁ ENTRE 1 E 100
function qNumero(n) {

    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }

    else {
        return false
    }
}



// PERGUNTA SE O NUMERO JÁ EXISTE NA LISTA
function nLista (n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }

    else {
        return false
    }

}

function adicionar() {

    // PERGUNTA SE O NUMERO FICA ENTRE 1 E 100 E SE O VALOR JA SE ENCONTRA NA LISTA/VETOR
    if(qNumero(numero.value) && !nLista(numero.value, valores)){
        
        valores.push(Number(numero.value)) // ADICIONA O NUMERO NO VETOR/ ARRAY = VALORES
        let item = document.createElement('option') // CRIA UM ELEMENTO DO TIPO OPTION
        item.text = `Valor Adicionado ${numero.value}` // ADICIONA O VALOR NA LISTA
        lista.appendChild(item) // A LISTA RECEBE O FILHO ITEM
        numero.value = '' // CAIXA DE TEXTO FICA VAZIA AO ADICIONAR UM NUMERO
        numero.focus()
    }

    else {
        alert('ERRADO ou Valor já inserido na Lista')
        numero.value = ''
        numero.focus()
    }

}

function finalizar() {
    // PERGUNTA SE O VETOR/ARRAY ESTA VAZIA
    if(valores.length == 0) {
        alert('[ERRO] Insira valores para finalizar!')
    }

    else {

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {

            // SOMA OS VALORES DO VETOR
            soma += valores[pos]

            // PERGUNTA QUAL E O MAIOR DO VETOR/ARRAY
            if(valores[pos] > maior) {
                maior = valores[pos]
            }

            //PERGUNTA QUAL E O MENOR DO VETOR/ARRAY
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

        }

        // MEDIA DOS VALORES
        media = soma / total


        //MOSTRA NA TELA O RESULTADO
        resultado.innerHTML = ''
        resultado.innerHTML += `TOTAL CADASTRADOS ${total}<br>`
        resultado.innerHTML += `O MAIOR FOI ${maior}<br>`
        resultado.innerHTML += `O MENOR FOI ${menor}<br>`
        resultado.innerHTML += `A SOMA DEU ${soma}<br>`
        resultado.innerHTML += `A MEDIA DEU ${media}<br>`
    }
}