const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Adiciona turno da noite lessoon 2

const addKeyValue = (obj,key,value) => {
    obj[key] = value
}
addKeyValue(lesson2, 'turno', 'noite');

// lista keys do obj

const listKeys = (obj) => {
    Object.keys(obj)
}

// tamanho objeto

const sizeObj = (obj) =>  {
    Object.keys(obj).length;
}

// valores objeto

const listValues = (obj) => {
    Object.values(obj);
}

// agrupa as lições

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Numero total de estudantes

const getNumberOfStudents = (obj) => {
    let result = 0;
    const students = Object.keys(obj);
      
    for (index in students) {
      result += obj[students[index]].numeroEstudantes;
    }
    return result;
};
