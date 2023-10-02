class Person {
    constructor(name, surname) {
        this.name = name,
            this.surname = surname
    }
    getFullName() {
        return `My fullname is ${this.name} ${this.surname}`;
    }
}
function getUpperCase() {
    let per = new Person('Vugar', 'Guliyev');
    return document.getElementById('fullname').innerHTML = per.getFullName().toUpperCase();
}

getUpperCase();
