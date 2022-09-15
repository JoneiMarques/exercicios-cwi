function imprimir(i){
  console.log(i)
}

///////------Verifica se os nomes são iguais------///////
function mesmoNome(cwi, reset) {
return cwi == reset
}

///////------Verifica se é maior de idade------///////
function maiorDeIdade(idade) {
    return idade >= 18
}

///////------calcula o valor do boleto com a taxa de 10%------///////
function valorComJuros(vBoleto) {
    return vBoleto * 1.1
}

///////------Calcula a média dos itens------///////
function mediaAritmetica(itens) {
    soma = 0

///////------soma------///////
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    ///////------divide pela quantidade------///////
    return soma / itens.length
}
///////------Calcula a margem bruta-----///////
function margemBruta(receitaLiquida, custoProdutosVendidos) {
    lucroBruto = receitaLiquida - custoProdutosVendidos
    return (lucroBruto / receitaLiquida) * 100
}


cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
