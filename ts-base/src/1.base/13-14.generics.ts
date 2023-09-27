/**
 * 泛型：
 * 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 */

function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<string[]>(['a', ',b', 'c']) // 手动指定类型
log(['a', ',b', 'c']) // TS 类型推断

// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
const log1 = new Log<number>()
log1.run(1)
const log2 = new Log()
log2.run({ a: 1 })

interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
