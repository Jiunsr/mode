
// 基本特性巩固
class Point{
  constructor(){
    this.userId = 1
  }
  toSay(){
    return 'say hi.'
  }
}

let isPoint = Point.prototype.constructor === Point
// 类的构造函数，等于类本身

let p1 = new Point()
let isP1 = p1 instanceof Point.prototype.constructor
// new的实例，指向构造函数

let point = new Point()
Object.keys(point) // [userId]
Object.getOwnPropertyNames(Point.prototype) // [constructor,toSay]
// 实例的原型方法，不可枚举  // Object.getOwnPropertyNames-取得所有枚举和不可枚举属性

class Foo{
  constructor(){
    return new Point()
  }
}
new Foo() instanceof Foo // false
// 默认的构造函数，返回实例对象(this)，可修改返回值。

let point37 = new Point()
point37.hasOwnProperty('userId') // true
point37.hasOwnProperty('toSay') // false
'toSay' in point37 // true #in语法，判断是否在原型或实例本身
// "this."显示定义的属性在实例本身，其他都定义在原型。 // hasOwnProperty-获取对象自身属性，原型方法除外

class Child extends Point {
  constructor(){
    super()
    this.childId = 10
  }
}
let child = new Child()
Object.getOwnPropertyNames(child)
// 父类的属性，将继承为实例的属性。静态属性不继承给实例

class Bar {
  userId = 1;   // 同等于在(this.)上定义
  constructor() {
    this.userId = 1
    this.createTime = new Date().toLocaleDateString()
  }
  static calc(...num){
    let v = num.reduce((a,b) => a+b,0)
    console.warn(v);
  }
  getData() {
    console.warn({time:this.createTime, userId:this.userId});
  }
  static calc(...num){
    return num.reduce((a,b)=>a+b, 0)
  }
}
// es6没有静态属性，只有静态方法。es2022：私有属性#weight

let p70 = new Point()
let p71 = new Point()
p70.__proto__ === p71.__proto__; //true
// 类的实例，共享同一个原型对象

p70.__proto__.printName = () => console.warn('ops')
// 通过实例的"__proto__"，改写原型方法

class Class77 {
  get prop() { return 'getter str' }
  set prop(value) { console.warn('setter:' + value)}
}
// 使用get,set 拦截属性的存取行为.

const method83 = 'getAtea'
class Cls83 {
  [method83]() {}
}
// 属性名，表达式写法

const Cls89 = class Me {
  getClassName() {
    return Me.name
  }
}
// [类表达式] 类名是Me，只能在类的内部用，外部只能用Cls89。

let person = new class {
  constructor(name) { this.name = name }
  sayName() {
    console.log(this.name)
  }
}('张三') 
// [类表达式] 立即执行写法

let Foo107 = class {};
class Bar108 extends Foo107 {}
// 类，没有变量提升

class Logger {
  constructor() {
    this.printName = this.printName.bind(this)
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);
  }
}
const logger = new Logger();
const { printName } = logger;
// printName(); // 'print' of undefined
// 提取方法单独使用时，this会指向运行时的环境，导致找不到print方法报错

// 静态属性，只允许静态方法访问。静态只能静态调用。
// 在类的内部，有权访问"自身创建的实例"的静态属性
// 父类静态方法
    //会被子类继承
    //不被实例继承
// 静态块：用于静态属性的初始化逻辑，每个类值有一个"静态块"，只运行一次

// 代码组织原则
    //相关的代码应该放在一起
    //实例属性可统一定义在类的顶层。写法更简洁





