/**Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

*O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome *{nome}* está no nível de *{nivel}*" **/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o nível do herói com base no XP

function calcularNivel(Xp) {
    if (Xp < 1000) {
        return 'Ferro'
    } else if (Xp >= 1000 & Xp <= 2000) {
        return 'Bronze'
    } else if (Xp >= 2001 & Xp <= 5000) {
        return 'Prata'
    } else if (Xp >= 5001 & Xp <= 7000) {
        return 'Ouro'
    } else if (Xp >= 7001 & Xp <= 8000) {
        return 'Platina'
    } else if (Xp >= 8001 & Xp <= 9000) {
        return 'Ascendente'
    } else if (Xp >= 9001 & Xp <= 10000) {
        return 'Imortal'
    } else if (Xp >= 10001) {
        return 'Radiante'
    } else {
        return 'Valor inválido, digite um valor válido entre 0 e 999999'
    }
}

rl.question('Qual é o nome do herói? ', (nomeHeroi) => {
    rl.question('Qual é o XP do herói? ', (Xp) => {
        const xPHeroi = parseInt(Xp);
        const nivel = calcularNivel(xPHeroi)

        console.log(`O herói ${nomeHeroi} possui o nível: ${nivel}`)
        
        rl.close();
    })
})