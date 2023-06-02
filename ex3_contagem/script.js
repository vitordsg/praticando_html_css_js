function contar() {

    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    let resultado = document.querySelector('div#resultado')

    // PERGUNTA SE AS 3 CAIXAS ESTÃO VAZIAS
    if(Number(inicio.value.length)== 0 || Number(fim.value.length) == 0 || Number(passos.value.length) == 0) {
        alert('[ERRO]')
        resultado.innerHTML = 'Impossivel contar, preencha os dados!'
    }

    else {

        resultado.innerHTML = `Contagem<br>`

        let i = Number(inicio.value) // CONVERTE PARA NUMERO
        let f = Number(fim.value) // CONVERTE PARA NUMERO
        let p = Number(passos.value) // CONVERTE PARA NUMERO

        // PERGUNTA SE OS PASSOS SÃO MENOR OU IGUAL A 0
        if(p <= 0) {
            alert('[ERRO] Passos não pode ser igual a 0, adaptando o número 1 no lugar!')
            p = 1
            passos.value = '1'
        }


        if (i < f) {

            //ORDEM CRESCENTE
            for(let c = i; c <= f; c += p) {

                resultado.innerHTML += `${c} \u{1F449}`

            }
        }

        else {

            //ORDEM DECRESCENTE
            for(let c = i; c >= f; c -= p) {

                resultado.innerHTML += `${c} \u{1F449}`
            }
        }


        resultado.innerHTML += `\u{1F3C1}`
    }
}