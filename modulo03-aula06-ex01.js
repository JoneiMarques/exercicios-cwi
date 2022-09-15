///////------Variáveis------///////
peso = 95
altura = 1.79

///////------Calcula IMC------///////
imc = peso / (altura ** 2)
grau = 0
classificacao = ""

///////------Verifica IMC------///////
if (imc < 18.50)
{
  grau = 0
  classificacao = "Magreza"
}
else if (imc < 25)
{
  grau = 0
  classificacao = "Normal"
}

else if (imc < 30)
{
  grau = 1
  classificacao = "Sobrepeso"
}

else if (imc < 40)
{
  grau = 2
  classificacao = "Obeso"
}

else 
{
  grau = 3
  classificacao = "Obesidade grave"
}


console.log("O Seu IMC é:", imc, "\nGrau de Obesidade:", grau, "\nClassificado como:", classificacao)


///////------Classifica------///////
switch (classificacao)
  {
  case "Obeso":
  case "Sobrepeso":
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
  break;

    case "Obesidade grave":
    console.log("É importante procurar um médico para avaliar a sua saúde.")
  break;
  }
