/*	 TASK 1

а) создать тип, который может быть: строка, число или null
б) создать тип, который может быть: Date или null
в) создать тип, который может быть типом из пункта "a" или из пункта "б"
========================================*/

type TStringNumberNull = String | Number | null;
type TDateNull = Date | null;
type TSnnDn = TStringNumberNull | TDateNull;

// let newSnn: StringNumberNull = {error:"kill me"} || "igor" || 8 || null;
let newSnn: TStringNumberNull = "text" || 8 || null;
// let newDn: DateNull = "error" || new Date() || null;
let newDn: TDateNull = new Date() || null;
// let newSnnDn:SnnDn = ['error'] || null || 5 || new Date() || "text";
let newSnnDn: TSnnDn = null || 5 || new Date() || "text";



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

interface IRole {
	role: "guest" | "manager" | "staff" | "admin" | "owner"
}

interface IAddress {
	city: String,
	country: String,
	street?: String,
	postcode: Number
}

interface IUser {
	name: String,
	age: Number,
	email: String,
	address?: IAddress,
	gender?: "f" | "m",
	role?: IRole["role"]
}

let users: IUser[] = [
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
]



/*	 TASK 3

Есть функция, которая принимает массив объектов.
У объектов должно быть обязательно поле "name" (но могут быть и любые другие поля).
Нельзя использовать any. Нельзя менять IName.
Исправить printNames так, чтобы она могла принимать любой массив объектов, но чтобы у объектов было обязательно поле "name":
========================================*/

interface IName {
	name: string
}

const printNames = (items: Array<IName & { name: string, [key: string]: any }>) => {
	items.forEach(item => console.log(item.name));
}

printNames([{ name: 'ook' }]);
printNames([{ age: 2, name: 'ook' }]);
printNames([{ lastName: 'test', name: 'ook' }]);



/*	 TASK 4

Создать свой собственный утилитный тип, который может принимать два типа (или интерфейса) и объединять их.
========================================*/

interface IPerson { name: string, age: number }

type Combine<I1,I2> = I1 & I2;

const user: Combine<IPerson, IRole> = { // the IRole interface is declared above
	name: 'John',
	age: 18,
	role: 'guest',
};