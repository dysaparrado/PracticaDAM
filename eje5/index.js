var people = Array();
var regexp = new RegExp('d[1-9]@gmail.com');
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Dylan" + i,
            email: "d" + i + "@gmail.com",
            salary: i + 10000,
            active: i % 2 === 0 ? true : false
        };
        people.push(newPerson);
    }
    imprimir();
}
function imprimir() {
    for (var i = 0; i < people.length; i++) {
        if (people[i].active && regexp.test(people[i].email)) {
            console.log(people[i]);
        }
    }
}
var a = createPeople();
console.log(a);
