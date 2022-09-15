colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

/* Verifica
 Uma empresa quer verificar se um colaborador está qualificado para a aposentadoria. Para estar em condições de se aposentar,
 ele deve atender a pelo menos um dos seguintes critérios:

Ter pelo menos 65 anos de idade
Ter trabalhado no mínimo 30 anos
Ter pelo menos 60 anos de idade e 25 anos de trabalho
 */
function verificarAposentadoria(nome) {

colaborador = false
idade = 0
tempoTrabalho = 0

  ///////------Busca colaborador------///////
for (i = 0; i < colaboradores.length; i++) {

  if (nome == colaboradores[i]) {
      colaborador = true
      idade = idades[i]
      tempoTrabalho = temposDeTrabalho[i]
    }
  }

///////------Se encontrar verifica aposentadoria------///////
  if (colaborador) {
        
    seIdade = (idade >= 65)
    porTempoDeTrabalho = (tempoTrabalho >= 30)
    seIdadeCTempoDT = (idade >= 60 && tempoTrabalho >= 25)


  if (seIdade || porTempoDeTrabalho || seIdadeCTempoDT) {
      console.log("Parabéns " + nome + ", já pode sair de férias eternas :)")
           console.log("-----------------------------------------------------")
    } else {
      console.log("Infelizmente " + nome + ", ainda falta um tempo :(")
          console.log("-----------------------------------------------------")
     }
    
   } else {
     console.log("Colaborador inválido :|")
      console.log("-----------------------------------------------------")
   }
}


verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)
