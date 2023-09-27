/* eslint-disable @typescript-eslint/no-var-requires */
const c1 = require('./a.node')
const c2 = require('./b.node')
const c3 = require('../es6/a')
console.log(c1)
console.log(c2)
console.log(c3)
// c3() // c3 is not a function
c3.default()

// 配合 `export = ` 语法使用
import c4 = require('../es6/d')
c4()

// 当开启 esModuleInterop 时，也可直接用 es 语法
import c5 from '../es6/d'
c5()
