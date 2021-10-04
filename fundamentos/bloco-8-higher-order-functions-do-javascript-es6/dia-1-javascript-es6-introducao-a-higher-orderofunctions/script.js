// const newEmployees = () => {
  // const employees = {
    // id1: createmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    // id2: createmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    // id3: createmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  // }
  // return employees;
// };

// const createmployees = (name) => {
  // const resultado ={nome: name, email: `${name}@trybe.com`};
  // return resultado;
// }

const resultadoSorteio = (aposta, checarAposta) =>{
  numeroSorteio = Math.ceil(Math.random()*5) ;
  const resultado = checarAposta(numeroSorteio, aposta);
  return resultado;
}
const checarAposta = (numeroSorteio, aposta) => {
  let resultado;
  if (aposta === numeroSorteio) {
    resultado = 'Parabéns você ganhou';
  } else {
    resultado = 'Tente novamente';
  }
  return resultado;
}
console.log(resultadoSorteio(1, checarAposta));