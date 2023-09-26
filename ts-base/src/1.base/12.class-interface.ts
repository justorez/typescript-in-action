interface Human {
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() {}
    age: number = 0
    sleep() {}
}

// 接口继承
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

// 接口继承多接口
interface Boy extends Man, Child {}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

class Auto {
    state = 1
    // private state2 = 1
}
// 接口继承类
interface AutoInterface extends Auto {}
class C implements AutoInterface {
    // state1 = 2 // 必须实现接口的所有属性
    state = 2
}
// Bus 继承了 state 属性，所以此时无需再次实现
class Bus extends Auto implements AutoInterface {}
