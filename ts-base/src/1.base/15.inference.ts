// 基本类型推断：从右到左
let a = 1;
let b = [1, null, 'a']
let c = {x: 1, y: 'a'}
let d = (x = 1) => x + 1

// 上下文类型推断：从左到右
window.onkeydown = (event) => {
    console.log(event.ctrlKey) // 推断为 KeyboardEvent
}

interface Foo {
    bar: number
}
// let foo = {} as Foo // 类型断言，由用户推断类型
// let foo = <Foo>{}
let foo: Foo = {
    bar: 1
}
// foo.bar = 1

// 异常提示：无法重新声明块范围变量。ts(2451)
// TS 认为文件之间可能会发生合并，
// 所以告诉 TS 该文件为独立模块即可
export default {}
