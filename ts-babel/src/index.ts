class A {
    a: number = 1
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
let n = { x, y, ...z }

// n = 1

// 课程当时 Babel 不支持的以下四种语法，现在已全部支持
// 1
namespace N {
    export const n = 1
}

// 2
let b = <A>{}
let s = {} as A
s.a = 1

// 3
const enum E { A, B }
let char = E.A

// 4
export = s
