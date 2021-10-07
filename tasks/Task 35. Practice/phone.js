// Задание #1
// а) Создайте класс Phone, который содержит поля number, model и weight.
// б) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
// в) Создайте три экземпляра этого класса. 
// г) Выведите на консоль значения их переменных. 
// д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. 
// getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.

class Phone{
    number;
    model;
    weight;
    constructor(number, model, weight){
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
    showPhone(){
        console.log(`Ваш номер - ${this.number}, `, `Модель Вашего телефона - ${this.model}, `, `Масса Вашего телефона ${this.weight}гр`);
    }
    receiveCall(name){
        console.log(`Звонит ${name}`);
    }
    getNumber(){
        return this.number;
    }
} export {Phone};