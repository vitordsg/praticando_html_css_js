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
        alert('CERTO')
        valores.push(Number(numero.value)) // ADICIONA O NUMERO NO VETOR/ ARRAY = VALORES
        let item = document.createElement('option') // CRIA UM ELEMENTO DO TIPO OPTION
        item.text = `Valor Adicionado ${numero.value}` // ADICIONA O VALOR NA LISTA
        lista.appendChild(item) // A LISTA RECEBE O FILHO ITEM
        numero.value = '' // CAIXA DE TEXTO FICA VAZIA AO ADICIONAR UM NUMERO
    }

    else {
        alert('ERRADO ou Valor já inserido na Lista')
        numero.value = ''
        numero.focus()
    }

}

