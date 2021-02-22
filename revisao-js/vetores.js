let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']

// Exibir o vetor
console.log(frutas)

// Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediárias
// splice()
// 1º paramêtro: posição que será removida (lembre-se que a contagem começa em 0-ZERO)
// 2º paramêtro: quantidade de elementos que serão removidos
let terceiraFruta = frutas.splice(2, 1) // Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) //splice sempre retorna um vetor

// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

// Inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

// Inserindo em posição intermediária
// splice() para inserção
// 1º paramêtro: a posição onde ocorrerá a inserção 
// 2º paramêtro: quantos elementos serão excluídos (0)
// Paramêtros seguintes: elementos a serem inseridos 

// Inserindo na 4º posição
frutas.splice(3, 0, 'pessego')
console.log(frutas)

// Inserindo duas frutas na 3º posição 
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

// Substituindo 6º fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)

/******************************
  * PERCURSOS DE VETOR 
*/ 

// 1) Percurso via tradicional 
// É o mais flexível, permitindo o percurso parcial ( pode começar 
// em um elemento que não seja o primeiro e terminar em um elemento 
// que não seja o último)
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('---------------------------')

// 2) Percurso via tradicional, em ordem inversa
for(let i = frutas.length -1; i >= 0; i--) {
    console.log(i, frutas[i])
}   

console.log('--------------------------')

// 3) Percurso usando for..of
// Percorre totalmente um vetor, sem necessidade de manter uma variável contadora
// Variáveis:
// fruta -> nome de variável que receberá cada elemento ( pode ser qualquer nome válido
// de variável)
// frutas -> o nome do vetor que está sendo percorrido
for(let fruta of frutas) {
    console.log(fruta)
}

console.log('---------------------------')

// 4) Percurso utilizado for Each ()
// forEach() recebe como argumento uma função cujo argumento
//é cada um dos elementos do vetor percorrido
// O nome do parâmetro da função passada pode ser qualquer nome válido
// de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})

console.log('---------------------------')

//forEach() utilizando arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))