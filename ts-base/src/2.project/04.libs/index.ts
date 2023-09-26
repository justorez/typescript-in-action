// import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({x: 1})
globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib({y: 2})
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething()

// 模块插件
// 为第三方模块添加自定义方法
import m from 'moment';
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {}

// 全局插件
// 为全局模块添加自定义方法
declare global {
    namespace globalLib {
        function doAnyting(): void
    }
}
globalLib.doAnyting = () => {}
