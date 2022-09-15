///////------Arrays------///////
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

///////------Variáveis------///////
nome = "Jonei"
verifica = ""

///////------Verifica------///////
for (n = 0; n <= nomesComuns.length; n++){
  if (nome == nomesComuns[n]){
    verifica = "sim"
    break
  }
  else {
    verifica = "nao"
  }
}

///////------classifica------///////
  switch (verifica){
  case "sim":
    console.log("É, nome comum :P")
    break
      
    case "nao":
      console.log("Diferentão, hein? XD")
      break
}

