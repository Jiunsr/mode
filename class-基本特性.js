
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
// 父类的属性，将继承为子类的属性。静态的"属性方法"除外

class Bar {
  userId = 1;   // 同等于在(this.)实例上定义
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
// 没有静态属性，只有静态方法

let p70 = new Point()
let p71 = new Point()
p70.__proto__ === p71.__proto__; //true
// 类的所有实例共享一个原型对象

p70.__proto__.printName = () => console.warn('ops')
// 通过实例(__proto__)改写原型方法

class Class77 {
  get prop() { return 'getter str' }
  set prop(value) { console.warn('setter:' + value)}
}
// 使用get,set 拦截属性的存取行为.

const method83 = 'getAtea'
class Cls83 {
  [method83]() {}
}
// [属性表达式] 类的属性名，可以用表达式

const Cls89 = class Me {
  getClassName() {
    return Me.name
  }
}
let cls89 = new Cls89()
// console.warn(cls89.getClassName())
// [类表达式] 类名是Me, Me只允许在Class内部可用，在外部只能用Cls89。

let person = new class {
  constructor(name) { this.name = name }
  sayName() {
    console.log(this.name)
  }
}('张三') 
// [类表达式] Class立即执行方式

let Foo107 = class {};
class Bar108 extends Foo107 {
}
// 类不存在变量提升

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
// 提取方法单独使用，this会默认指向运行时的环境，导致找不到print方法报错










