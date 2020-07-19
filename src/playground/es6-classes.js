class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi i'am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor())
            description += ` His major is ${this.major}`
        return description
    }
}

class Travler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreetings () {
        let greetings = super.getGreetings();
        if (this.homeLocation)
            greetings += ` im visiting from ${this.homeLocation}`
        return greetings
    }
}

const ana = new Travler('Abderrahman Fasihi',29, 'khouribga')
console.log(ana.getGreetings());
const other = new Travler();
console.log(other.getGreetings());

