// 七种基本类型
// number bigint boolean string symbol undefined null

// 原始类型
const bool: boolean = true
let num: number | undefined | null = 123
const bnum: bigint = 987654321n
const str: string = 'abc'
// str = 123

// 数组
const arr1: number[] = [1, 2, 3]
const arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
// 限制了数组元素的类型和个数
const tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
const fn = (x: number, y: number) => x + y
type compute = (x: number, y: number) => number
const fn2:compute = (a, b) => a + b

// 对象
const obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
const s1: symbol = Symbol()
const s2 = Symbol()
// console.log(s1 === s2)

// undefined, null
const un: undefined = undefined
const nu: null = null
num = undefined
num = null

// js 中为什么用 void 0 代替 undefined？
// 因为 undefined 不是保留字，可以被替换
// (() => {var undefined=2;console.log(undefined)})()

// void
const noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
// 不会返回任何值
const error = () => {
    throw new Error('error')
}
const endless = () => {
    while(true) {}
}
