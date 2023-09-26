// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// 默认数值从 0 开始，后续成员递增
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 0
enum Char {
    // const member
    a,
    b = Char.a,
    c = 1 + 3,
    // computed member
    // 运行时计算值
    d = Math.random(),
    e = '123'.length,
    f = 4
}
console.log(Char)

// 常量枚举
// 编译后枚举本身代码会被移除，减少构建代码体积
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }
enum H { a = 'apple', b = 'banana' }

// let e: E = 3
// let f: F = 3
// console.log(e === f)

// let e1: E.a = 3
// let e2: E.b = 3
// let e3: E.a = 3
// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a
let g2: H.a = H.a
console.log(g1, g2)
// console.log(g1 === g2) // 不同枚举之间不能用于比较
