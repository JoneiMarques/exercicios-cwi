///////------Arrays------///////
alunos = ["Enzo", "Valentina", "Joana", "Marcio"]
notas = [[5.6,7.2], [9.1,8.4], [5.8,4.6], [4.5,8.5]]

///////------Seleciona o aluno e nota------///////
alunoSelecionado = 0
nomeDoAluno = alunos[alunoSelecionado]
notasDoAluno = notas[alunoSelecionado]

///////------Calcula a média------///////
nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]
media = (nota1 + nota2) / 2

console.log(nomeDoAluno)
console.log("A primeira nota foi:", nota1)
console.log("A segunda nota foi:", nota2)
console.log(nomeDoAluno, "Teve Média", media)
