
//Função para converter para Binário
function codificar() {
    texto = document.getElementById('texto').value
    binValues = []
    hexValues = []
    textBin = ""
    textHex = ""
    for (i = 0; i < texto.length; i++) {
        binValue = texto.charCodeAt(i).toString(2)
        hexValue = texto.charCodeAt(i).toString(16)
        if (binValue.length = 7) {
            binValues.push(("00000000" + binValue).slice(-8))
        }
        if (hexValue.length = 1) {
            hexValues.push(("00" + hexValue).slice(-2))
        }
    }
    for (i = 0; i < binValues.length; i++) {
        if (i == 0) {
            textBin += binValues[i]
        } else {
            textBin += " " + binValues[i]
        }
    }

    for (i = 0; i < hexValues.length; i++) {
        if (i == 0) {
            textHex += hexValues[i]
        } else {
            textHex += " " + hexValues[i]
        }
    }


    textarea = document.getElementById('resultado')
    textarea.value = textBin
    textarea2 = document.getElementById('hex')
    textarea2.value = textHex
}

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 49) {
            return false;
        }
    }
}