// 抽象类：只能被继承，无法被实例化
// 抽离共性，提高代码复用性，此外可用于实现多态
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
// let animal = new Animal()

class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
        this.pri()
    }
    public name: string = 'dog' // 默认 public
    run() {}
    private pri() {} // 只能在类中访问
    protected pro() {} // 只能在类及其子类中访问
    readonly legs: number = 4
    static food: string = 'bones'
    sleep() {
        console.log('Dog sleep')
    }
}
console.log('Dog.prototype', Dog.prototype)
const dog = new Dog('wangwang')
// console.log(dog)
// dog.pri()
// dog.pro() // 无法通过实例访问保护属性
console.log(Dog.food)
dog.eat()

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri() // 无法在子类中访问父类的私有成员
        this.pro()
    }
    // color: string // 参数加上修饰符，自动识别为实例属性，无需再显示声明
}
console.log(Husky.food) // 静态属性被继承

class Cat extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}
const cat = new Cat()

const animals: Animal[] = [dog, cat]
animals.forEach(i => i.sleep()) // 多态示例

class Workflow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
    next() {
        return this
    }
}
new MyFlow().step1().next().step2().next()
