//loogiliste sulgude vahel on objekt, koos omaduste (nt age) ja väärtustega (nt 11)

//let friends = ['Ron', 'Hermione', 'Hedwig'];

//let newStudent = {
//    firstName: 'Harry',
//    age: 11,
//    isWizard: true,
//    friends: ['Ron', 'Hermione', 'Hedwig'],
//    introduce:function() {
//        console.log(`Greetings, my name is ${this.firstName}`); //this - kasutada seda, mida leiad objekti sees
//    }
//}

let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hermione', 'Hedwig'],
        introduce:function() {
            console.log(`Greetings, my name is ${this.firstName}`);
        }
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hermione', 'Hedwig'],
        introduce:function() {
            console.log(`Greetings, my name is ${this.firstName}`);

    }    
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Ron', 'Hedwig'],
        introduce:function() {
            console.log(`Greetings, my name is ${this.firstName}`);

    }    
    },
    {
        firstName: 'Hedwig',
        age: 'unknown',
        isWizard: false,
        friends: ['Harry', 'Hermione', 'Ron'],
        introduce:function() {
            console.log(`${this.firstName} says hoot-hoot.`);

    }    
    },
    
]

//filtreerimine - vastavalt mingile tingimusele
let students = friends.filter(friend => { //element (friend), millle määratakse tingimus
    if(friend.isWizard) { //vaikimisi väärtus on true
        return friend;
    }
});

//map - vaatab üle iga elemndi ja teeb midagi
const studentsList = students.map(student => {
    return student.firstName; //salestatakse massiivi
})
//console.log(studentsList);

//sort - sorteerib massiivi, nt A to Z
studentsList.sort((a, b) => {return b.localeCompare(a)});
console.log(studentsList);


//console.log(friends[3]);
//friends[3].introduce(); //Hedwig tutvustab ennast

//console.log(friends[2].friends); //Hermione sõbrad

//newStudent.introduce();
//saab muutujale anda uue väärtuse (let)
//newStudent.firstName = 'Mary';
//newStudent.age = 15;

//console.log(newStudent.firstName);
//console.log(newStudent.age);
//console.log(newStudent.friends);

//newStudent.friends.forEach(friend => {
//    console.log(friend);
//});

//console.log(`${newStudent.firstName} has got ${newStudent.friends.length} friends.`)
