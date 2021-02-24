/***********************
 * BUSCA SEQUENCIAL
 * 
 * Percorre a sequência de dados do início ao fim. comparando
 * cada um deles contra o valor da BUSCA
 * 
 * Quando encontra o valor de busca, o percurso é interrompido
 * e retorna-se a POSIÇÃO onde foi encontrado o valor de busca
 * 
 * Caso o valor de busca não tenha sido encontrado após o percurso
 * total da sequência de dados, retorna-se o valor convencional de -1
 * para indicar a inêxistência do valor de busca entre os dados
 * 
 * A busca sequêncial NÃO EXIGE que a sequência de dados esteja 
 * previamente ordenada
 * 
 */

 function buscaSequencial(vetor, valorBusca) {
     // Percurso com for tradicional
     for(let i = 0; i < vetor.length; i++) {
        // Encontrando o valor de busca, retorne-se a posição onde foi encontrado 
        if(vetor[i] === valorBusca) return i
     }
     // Retorna-se -1 no caso o valor de busca não tenha sido encontrado
     return -1
 }

const primos = [

]

console.log(buscaSequencial(primos, 11))
console.log(buscaSequencial(primos, 6911))
