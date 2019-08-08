"use strict";
/*	 TASK 1

а) создать тип, который может быть: строка, число или null
б) создать тип, который может быть: Date или null
в) создать тип, который может быть типом из пункта "a" или из пункта "б"
========================================*/
// let newSnn: StringNumberNull = {error:"kill me"} || "igor" || 8 || null;
let newSnn = "text" || 8 || null;
// let newDn: DateNull = "error" || new Date() || null;
let newDn = new Date() || null;
// let newSnnDn:SnnDn = ['error'] || null || 5 || new Date() || "text";
let newSnnDn = null || 5 || new Date() || "text";
let users = [
    {
        name: "Natasha",
        age: 33,
        email: "example@example.example",
        address: {
            city: "Springfield",
            country: "USA",
            postcode: 1
        },
        gender: "f",
        role: "owner"
    },
    {
        name: "Oleg",
        age: 33,
        email: "example@example.example",
        address: {
            city: "Springfield",
            country: "USA",
            postcode: 1
        },
        gender: "m",
        role: "staff"
    }
];
const printNames = (items) => {
    items.forEach(item => console.log(item.name));
};
printNames([{ name: 'ook' }]);
printNames([{ age: 2, name: 'ook' }]);
printNames([{ lastName: 'test', name: 'ook' }]);
const user = {
    name: 'John',
    age: 18,
    role: 'guest',
};
