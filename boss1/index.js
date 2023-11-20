// Criando variavel com nome de heroi.
let nomeHeroi = "Prodigy"    

// Criando variavel com xp do Heroi.
let xpHeroi = 2500

// Criando variaveis niveis de XP.
let xp1 = "Nivel de Ferro" //Se XP for menor do que 1.000 = Ferro
let xp2 = "Nivel de Bronze" // Se XP for entre 1.001 e 2.000 = Bronze
let xp3 = "Nivel de Prata" // Se XP for entre 2.001 e 5.000 = Prata
let xp4 = "Nivel de Ouro" // Se XP for entre 5.001 e 7.000 = Ouro
let xp5 = "Nivel de Platina" // Se XP for entre 7.001 e 8.000 = Platina 
let xp6 = "Nivel Ascedente" // Se XP for entre 8.001 e 9.000 = Ascendente
let xp7 = "Nivel Imortal" // Se XP for entre 9.001 e 10.000= Imortal
let xp8 = "Nivel Radiante" // Se XP for maior ou igual a 10.001 = Radiante


if (xpHeroi < 1000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp1)
}

else if (xpHeroi >= 1001 || xpHeroi <= 2000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp2)
}

else (xpHeroi >= 2001 || xpHeroi <= 5000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp3)
}

if (xpHeroi >= 5001 || xpHeroi <= 7000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp4)
}

else if (xpHeroi >= 7001 || xpHeroi <= 8000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp5)
}

else (xpHeroi >= 8001 || xpHeroi <= 9000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp6)
}

if (xpHeroi >= 9001 || xpHeroi <= 10000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp7)
}

else if (xpHeroi >= 10000)
{
console.log ("O Heroi de Nome " + nomeHeroi + " está no " + xp8)
}

