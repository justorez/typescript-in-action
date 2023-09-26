interface List {
    readonly id: number
    name: string
    // [x: string]: any; // 索引签名，允许任意多个其它属性
    age?: number
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        // value.id++ // 只读属性不允许修改
    })
}
let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
    ]
}
render(result)

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: any
    // y: number;
    [z: number]: number
}

// let add: (x: number, y: number) => number
// 使用接口定义函数
// interface Add {
//     (x: number, y: number): number
// }
// 使用类型别名定义函数
type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b

interface Lib {
    (): void
    version: string
    doSomething(): void
}

function getLib() {
    let lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {
        console.log('do something by lib', lib.version)
    }
    return lib
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
