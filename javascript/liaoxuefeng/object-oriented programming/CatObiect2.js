/*
请利用class重新定义Cat，并让它从已有的Animal继承，然后新增一个方法say()，返回字符串'Hello, xxx!'：
*/
'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name); 
    }

   say() {
        return `Hello, ${this.name}!`;
    }
}

var a = new Cat('smallM');
console.log(a.say());