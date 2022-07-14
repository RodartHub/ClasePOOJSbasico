// function videoPlay(id){
//     const urlSecreta = ""
//     console.log("Se esta reproduciendo desde la url" + urlSecreta);
// }

// function videoStop(id){
//     const urlSecreta = ""
//     console.log("Pausamos la url" + urlSecreta);
// }

// export class PlatziClass {
//     constructor ({
//         name,
//         videoID,
//     }){
//         this.name = name;
//         this.videoID = videoID;
//     }

//     reproducir (){
//         videoPlay(this.videoID);
//     }

//     pausar(){
//         videoStop(this.videoID);
//     }

// }

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " ("+this.studentRole+")");
        console.log(this.likes+" Likes");
        console.log(this.content);
    }
}



class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if (nuevoNombre === "Mal curso de programaciòn"){
            console.error("No esta permitido ese nombre");
        } else {
        this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programaciòn bàsica",
    isFree: true,

})

const cursoDefinitivoHtmlCss = new Course({
    name: "Curso Definitivo de HTML y CSS",
    
})

const cursoPracticoHtmlCss= new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
})

class learningPaths {
    constructor({
        name, courses = []
    }){
        this._name = name;
        this._courses = courses;
    } 
    addCourses(nombreCurso){
        this.courses.push(nombreCurso);
    }

    get name(){
        return this._courses;
    }

    set name(rutasNuevas){
        if(rutasNuevas === "Escuela de diseño web"){
            alert("Solo puedes colocar la escuela de diseño web");
        }else{
            alert("Muy buena elecciòn!");
            this._name = rutasNuevas;
        }
    }
}


class approvedCourses{
    constructor({
        courses = []
    }){
        this.courses = courses;
    } 
    addCourses(nombreCurso){
        this.courses.push(nombreCurso);
    }
}

const cursosAprobados = new approvedCourses({
    courses: []
});

const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHtmlCss,
    ]
});

const escuelaVGS = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoPracticoHtmlCss
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, "+ this.name + ", solo puedes tomar cursos gratuitos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, "+ this.name + ", no puedes tomar cursos de inglès");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole:"profesor",
        });
        comment.publicar();

}



const Rodrigo = new ExpertStudent({
    name: "Rodrigo",
    username: "Rodart",
    email: "rodrigo@hotmail.com",
    instagram: "rvalencia",
    learningPaths: [
        escuelaWeb, 
        escuelaVGS
    ],
    approvedCourses: [cursosAprobados],
});

const Jairo = new BasicStudent({
    name: "Jairo",
    username: "JGomez",
    email: "jairo@hotmail.com",
    instagram: "JGomez10",
    learningPaths: [
        escuelaWeb
    ],
});

const Oscar = new FreeStudent({
    name: "Oscar",
    username: "OscarV",
    email: "oscar@hotmail.com",
    instagram: "OscarVinan",
    learningPaths: [
        escuelaWeb,
        escuelaVGS
    ],
});

const Freddy = new TeacherStudent{({
    name: "Freddy",
    username: "FreddyV",
    email: "freddier@hotmail.com",
    instagram: "FreddyVega",
    learningPaths: [
        escuelaWeb,
        escuelaVGS
    ],
});

}

