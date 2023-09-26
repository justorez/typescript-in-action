namespace Shape {
    const pi = Math.PI
    export function cricle(r: number) {
        return pi * r ** 2
    }
}

// 命名空间和模块不要混合使用
// 命名空间的正确使用方法：
// 编译成 JS 后，分别在 HTML 中引入，作为一个全局类库去用
// 命名空间原理：实现一个闭包，隐藏不想暴露的内部变量和方法
// 随着模块化的到来，命名空间已不再被经常使用