
// 特性巩固
class Point{
  constructor(){
    this.userId = 1
  }
  toSay(){
    return 'say hi.'
  }
}

let isPoint = Point.prototype.constructor === Point
console.log("🚀 ~ file: Untitled-1 ~ line 11 ~ isPoint", isPoint)
// 类的构造函数指向类本身

let p1 = new Point()
let isP1 = p1 instanceof Point.prototype.constructor
console.log("🚀 ~ file: Untitled-1 ~ line 16 ~ isP1", isP1)
// 创建实例指向构造函数

let point = new Point()
let key = Object.keys(point)
console.log("🚀 ~ file: Untitled-1 ~ line 24 ~ key", key)
console.log("🚀 ~ file: Untitled-1 ~ line 25 ~ key1", Object.getOwnPropertyNames(Point.prototype))
// 类的原型方法不可枚举（Object.getOwnPropertyNames-取得所有枚举和不可枚举属性）

class Foo{
  constructor(){
    return new Point()
  }
}
let isFoo = new Foo() instanceof Foo
console.log("🚀 ~ file: Untitled-1 ~ line 35 ~ isFoo", isFoo)
// 类默认有构造函数，构造函数默认返回实例对象(this)，可以指定返回另一个对象。class类必须new调用

let point37 = new Point()
point37.hasOwnProperty('userId') // true
point37.hasOwnProperty('toSay') // false
'toSay' in point37 // true
// 实例的属性，除非显示定义在实例本身(this.)，否则都定义在原型上。（hasOwnProperty-获取对象自身属性，原型方法除外）


class Child extends Point {
  constructor(){
    super()
    this.childId = 10
  }
}
let child = new Child()
let keys = Object.getOwnPropertyNames(child)
console.log("🚀 ~ file: class.js ~ line 50 ~ keys", keys)
// 父类的属性也会继承为子类的属性，成为子类自身的属性

class Bar {
  userId = 1;   // 同等于在constructor(this.实例)上定义
  constructor() {
    this.createTime = new Date().toLocaleDateString()
  }
  static calc(...num){
    let v = num.reduce((a,b) => a+b,0)
    console.warn(v);
  }
  getData() {
    console.warn({time:this.createTime, userId:this.userId});
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
console.warn(cls89.getClassName())
// [类表达式] 类名是Me, Me只允许在Class内部可用，在外部只能用Cls89。

let person = new class {
  constructor(name) { this.name = name }
  sayName() {
    console.log(this.name)
  }
}('张三')
person.sayName();
// [类表达式] Class立即执行方式












