// 七种基本类型
// number bigint boolean string symbol undefined null

// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let bnum: bigint = 987654321n
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
// 限制了数组元素的类型和个数
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let fn = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
num = undefined
num = null

// js 中为什么用 void 0 代替 undefined？
// 因为 undefined 不是保留字，可以被替换
// (() => {var undefined=2;console.log(undefined)})()

// void
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
// 不会返回任何值
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}
