/*	 TASK 1

а) создать тип, который может быть: строка, число или null
б) создать тип, который может быть: Date или null
в) создать тип, который может быть типом из пункта "a" или из пункта "б"
========================================*/
// let newSnn: StringNumberNull = {error:"kill me"} || "igor" || 8 || null;
var newSnn = "text" || 8 || null;
// let newDn: DateNull = "error" || new Date() || null;
var newDn = new Date() || null;
// let newSnnDn:SnnDn = ['error'] || null || 5 || new Date() || "text";
var newSnnDn = null || 5 || new Date() || "text";
/*	 TASK 2

а) необходимо выбрать нужную конструкцию typescript для создания сущности Роль, которая может иметь значения "guest", "manager", "staff", "admin", "owner"
б) создать интерфейс Адрес, описывающий адрес со следующими полями:
- город типа строка (обязательное поле)
- страна типа строка (обязательное поле)
- улица типа строка
- индекс типа число (обязательное поле)

в) создать интерфейс, описывающий пользователя:
- имя типа строка (обязательное поле)
- возраст типа число (обязательное поле)
- эл. почта типа строка (обязательное поле)
- адрес типа "Адрес"
- пол - может иметь только значения "f" или "m"
- роль - можеть принимать значения, перечисленные в пункте "а"
г) объявить переменную с типом "массив пользователей" (использовать интерфейс из пунтка "в") и заполнить массив парами соответствующих объектов
========================================*/
var ERole;
(function (ERole) {
    ERole["Guest"] = "guest";
    ERole["Manager"] = "manager";
    ERole["Staff"] = "staff";
    ERole["Admin"] = "admin";
    ERole["Owner"] = "owner";
})(ERole || (ERole = {}));
var users = [
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
        role: ERole.Admin
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
        role: ERole.Owner
    }
];
var printNames = function (items) {
    items.forEach(function (item) { return console.log(item.name); });
};
printNames([{ name: 'ook' }]);
printNames([{ age: 2, name: 'ook' }]);
printNames([{ lastName: 'test', name: 'ook' }]);
var user = {
    name: 'John',
    age: 18,
    role: "guest"
};
