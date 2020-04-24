export class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // getter
    get name() {
        return this._firstName + ' ' + this._lastName;
    }

    // setter
    set firstname(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
}