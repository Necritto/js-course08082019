let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

alert(users.sort(byField('name')));
alert(users.sort(byField('age')));

function byField(fieldName) {
    return (a, b) => {
        return ( a.fieldName > b.fieldName ? 1 : -1);
    };
}