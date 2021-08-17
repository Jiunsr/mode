
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

Point.prototype.constructor
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
  userId = 1
  constructor() {
    this.createTime = new Date().toLocaleDateString()
  }
  static getId(){
    return this.userId
  }
  getData() {
    return {time:this.createTime, id:Bar.userId};
  }
}
let val68 = new Bar()
console.warn(val68);
console.warn(Bar.getId());






