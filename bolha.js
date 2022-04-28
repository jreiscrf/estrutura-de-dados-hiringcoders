var valores = [8, 7, 6, 5, 4, 3, 2, 1, 0];
var elementos = [];
var topo = -1;
var max = 10;
var numDecimal = 10;
var resto;


// Colocar itens no array elementos
function push(num) {
    if (topo < max) {
        topo = topo + 1;
        elementos[topo] = num;
    } else {
        console.log('Pilha cheia');
    }
}


// Retirar itens no array elementos
function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else {
        console.log("Pilha vazia")
    }
}


//Ordena arrays
function ordena() {
    let inicio = 0;
    let fim = 9;
    let tmp;

    for (vezes = 0; vezes < 9; vezes++) {
        for (pos = inicio; pos < fim - 1; pos++) {
            if (valores[pos] > valores[pos + 1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos + 1]; 
                valores[pos + 1] = tmp;
            }
        }
    }
    console.log('Ordenado ... ' + valores)
}


//Busca um elemento do array
function busca(num) {
    for (i = 0; i < 9; i++) {
        if (num == valores[i]) {
            return 'O seu número está na posição: ' + i;
        }
    }
    return 'Numero não existente!';
}


//Busca um elemento do array pela busca binária
function buscaBin(num) {
    let inicio, meio, fim;
    inicio = 0;
    fim = 8;
    let passos = 0;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;
        if (num == valores[meio]) {
            return 'Posição: ' + meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    return 'Numero não existente!';
}



console.log(valores);
console.log(busca(2))
ordena()
console.log(valores);
console.log(buscaBin(0));
push(50);
console.log(elementos);
push(60);
console.log(elementos);
console.log(pop());
console.log(pop());
console.log(pop());
console.log(elementos);