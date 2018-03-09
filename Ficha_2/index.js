var num = [7, 3, 6, 12, 5];
var cores = ["Vermelho", "Verde", "Branco", "Preto"];

function media() {
    var total = 0;
    var media = 0;
    for (var i = 0; i < num.length; i++) {
        total += num[i];
    }

    media = total / num.length;

    document.getElementById("textarea").innerHTML = media;
}

function menor() {
    var menor = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] < menor) {
            menor = num[i];
        }
    }
    document.getElementById("textarea").innerHTML = menor;
}

function semvalor() {
    var valor = window.prompt("Indique o valor: ");
    var novoArray = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] != valor) {
            novoArray.push(num[i]);
        }
    }
    document.getElementById("textarea").innerHTML = novoArray;
}

function concatenados() {
    var todasCores = "";
    for (var i = 0; i < cores.length; i++) {
        todasCores += cores[i] + " ";
    }
    document.getElementById("textarea").innerHTML = todasCores;
}

function ordemAlfabetica() {
    document.getElementById("textarea").innerHTML = cores.sort();
}

function decrescente() {
    var inversa = [];
    for (var i = cores.length - 1; i >= 0; i--) {
        inversa += cores[i] + ", ";
    }
    document.getElementById("textarea").innerHTML = inversa;
}

function maisCaracteres() {
    var tamanho = 0;
    var cor = "";
    for (var i = 0; i < cores.length; i++) {
        if (cores[i].length > tamanho) {
            tamanho = cores[i].length;
            cor = cores[i];
        }
    }
    document.getElementById("textarea").innerHTML = cor + " - " + tamanho + " letras"
}

function n_Ocorrencias() {
    var valor = window.prompt("Indique a palavra: ");
    var n_Ocorre = 0;
    for (var i = 0; i < cores.length; i++) {
        if (cores[i] == valor) {
            n_Ocorre++;
        }
    }
    document.getElementById("textarea").innerHTML = n_Ocorre;
}

function pass() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var array = [password, confirmPassword];
    for (var i = 0; i < array.length; i++) {
        if (array[0] == array[1]) {
            document.getElementById("textarea").innerHTML = "1";
        }
        else {
            document.getElementById("textarea").innerHTML = "0";
        }
    }
}

function posicao() {
    var elemento = window.prompt("Indique o elemento: ");
    for (var i = 0; i < cores.length; i++) {
        if (cores[i] == elemento) {
            document.getElementById("textarea").innerHTML = i + 1;
        }
    }
}

function positivos() {
    var valor = window.prompt("Indique o valor: ");
    var posiNeg = [2, -3, 5, 6, -10, 7, 11];
    var array = [];
    for (var i = 0; i < posiNeg.length; i++) {
        if (posiNeg[i] >= 0) {
            if (posiNeg[i] != valor) {
                array += posiNeg[i] + " ";
            }
            else if (posiNeg[i] == valor) {
                array += posiNeg[i];
                break;
            }
        }
        else {
            continue;
        }
    }
    document.getElementById("textarea").innerHTML = array;
}

function par() {
    var novo = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            novo += num[i] + " ";
        }
    }
    document.getElementById("textarea").innerHTML = novo;
}

function soma() {
    var array1 = [1, 0, 2, 3, 4];
    var array2 = [3, 5, 6, 7, 8, 13];
    var arraySoma = [];
    for (var i = 0; i < array2.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            if (i == j) //não aparece o 13
            {
                arraySoma += parseInt(array1[i]) + parseInt(array2[j]) + " ";
            }
            /*else if(j == null)
            {
                arraySoma += parseInt(array2[j]) + 0;
            }*/
        }
    }
    document.getElementById("textarea").innerHTML = arraySoma;
}