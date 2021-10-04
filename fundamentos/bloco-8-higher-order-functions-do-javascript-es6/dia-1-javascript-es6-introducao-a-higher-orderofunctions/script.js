const newEmployees = () => {
  const employees = {
    id1: createmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createmployees = (name) => {
  const resultado ={nome: name, email: `${name}@trybe.com`};
  return resultado;
}
console.log(newEmployees());