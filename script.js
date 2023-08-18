import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

/* 
  # JavaScript - Exercício 02
  
  Bora praticar e rever tudo o que foi ensinado na aula? **💜**

  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [x]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

/**
 * Calculate the average of the grades.
 * @param {number[]} grades 
 */
function calculateAverage(grades) {
  const sumGrades = grades.reduce((result, value) => {
    return result + value
  }, 0)

  return sumGrades / grades.length
}

/**
 * Get a random list of students.
 * 
 * @typedef Student
 * @property {string} name
 * @property {number} firstGrade
 * @property {number} secondGrade
 * 
 * @typedef GetStudentsResponse
 * @property {Student[]} students
 * 
 * @returns {GetStudentsResponse}
 */
function getStudents() {
  const studentsQuantity = 10
  const students = []

  for (let i = 1; i <= studentsQuantity; i++) {
    students.push({
      name: faker.person.firstName(),
      firstGrade: faker.number.int(10),
      secondGrade: faker.number.int(10),
    })
  }

  return {
    students,
  }
}

function run() {
  const contestAverage = 7

  const { students } = getStudents()

  for (let student of students) {
    const { name, firstGrade, secondGrade } = student

    const studentGrades = [firstGrade, secondGrade]
    const studentAverage = calculateAverage(studentGrades)

    const isApproved = studentAverage >= contestAverage

    const resultMessage = isApproved
      ? `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
      : `Não foi dessa vez, ${name}! Tente novamente!`

    const message = [
      `A média do aluno(a) ${name} é: ${studentAverage}`,
      resultMessage
    ].join('\n')

    alert(message)
  }
}

run()
