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
const result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
    ]
}
render(result)

interface StringArray {
    [index: number]: string
}
const chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: unknown
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
const add: Add = (a: number, b: number) => a + b

interface Lib {
    (): void
    version: string
    doSomething(): void
}

function getLib() {
    const lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {
        console.log('do something by lib', lib.version)
    }
    return lib
}
const lib1 = getLib()
lib1()
const lib2 = getLib()
lib2.doSomething()
