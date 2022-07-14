const Rodrigo = {
    name: "Rodrigo",
    age: 26,
    cursosAprobados: [
        "Curso de git", "Curso de CSS Grid",
    ],

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const Ramiro = new Student(
    "Ramiro", 40, ["Curso de java", "Creaciòn de personajes"],
);

// PROTOTIPOS CON LA SINTAXIS DE CLASES

class Student2 {
    constructor({name,age,cursosAprobados = []}){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const Carlos = new Student2(
    {
        name:"Carlos",
        age:35,
        cursosAprobados:["Curso de analisis de datos", "Curso de python"],
    }
);