//Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birtjday.getTime();
        const ageDate = newDate(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());