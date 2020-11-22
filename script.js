
//Função para converter para Binário
function codificar() {
    texto = document.getElementById('texto').value
    binValues = []
    textBin = ""
    for (i = 0; i < texto.length; i++) {
        binValue = texto.charCodeAt(i).toString(2)
        if (binValue.length = 7) {
            binValues.push(("00000000" + binValue).slice(-8))
        }
    }
    for (i = 0; i < binValues.length; i++) {
        if (i == 0) {
            textBin += binValues[i]
        } else {
            textBin += " " + binValues[i]
        }
    }
    textarea = document.getElementById('resultado')
    textarea.value = textBin
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