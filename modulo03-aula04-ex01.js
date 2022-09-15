///////------Variáveis------///////
nomeCompleto = "Jonei Marques"
apelido = "Jo"
idade = 37
dataNascimento = "17/10/1984"
localNascimento = "Porto Alegre/RS"
altura = 1.79
trabalhando = false

/*Operador ternário (?)
O termo ternário significa composto de três itens ou partes. O operador ? também é chamado de operador ternário pois, diferente dos outros operadores como o de igualdade estrita (===) ou o operador de resto (%), ele é o único que recebe três operandos.

Começando com ?, adicionamos uma condição do lado esquerdo e um valor do lado direito a ser retornado quando a condição for verdadeira. Em seguida, adicionamos dois pontos (:) seguidos de um valor a ser retornado quando a condição é falsa.*/

apresentacao = "Meu nome é: " + nomeCompleto +"\nSou conhecido[a] como: " + apelido + "\nTenho: " + idade + " anos\nNasci no dia " + dataNascimento + ", na cidade de " + localNascimento + "\nTenho " + altura + "m de altura \nAtualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)
