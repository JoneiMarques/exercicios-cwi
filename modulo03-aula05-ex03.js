///////------Variáveis------///////
vBoleto = 190

///////------Calcula o valor do juros (10%)------///////
juros = (vBoleto * 0.1)

///////------Calcula o valor do boleto com 10% de juros------///////
valorComJuros = (vBoleto * 1.1)

console.log("Valor do boleto: R$" + vBoleto.toFixed(2) + "\nJuros: R$" + juros.toFixed(2) + "\nValor com juros: R$" + valorComJuros.toFixed(2))
