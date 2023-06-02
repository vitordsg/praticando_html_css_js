function calcular() {

    let numero = document.getElementById('txtnum')
    let resultado = document.getElementById('stabuada')

    if (Number(numero.value.lengeth) == 0) {
        alert('[ERRO] Preencha o campa para continuar!')
    }

    else {

        let n = Number(numero.value)
        let c = 1
        resultado.innerHTML = ''

        while (c <= 10) {
            
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c} `
            item.value = `${c}`
            resultado.appendChild(item)
            c++
        }
    }
}