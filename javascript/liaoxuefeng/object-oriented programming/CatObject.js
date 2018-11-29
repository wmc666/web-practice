/* 
请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'
*/
'use strict';

function Cat(name)
{
    this.name = name;
}

Cat.prototype.say = function () 
{
    return  `Hello, ${this.name}!`;
};

var a = new Cat('smallM');
console.log(a.say());