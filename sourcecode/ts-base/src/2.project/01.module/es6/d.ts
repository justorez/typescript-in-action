// TS 为了兼容 esmodule 和 commonjs 提供的顶级导出语法
// 当 tsconfig 配置 commonjs 时，以下代码会被编译为：
// module.exports = function() { ... }
export = function () {
    console.log("[d] I'm default")
}
// export let a = 1 // 不再允许其它的导出语句