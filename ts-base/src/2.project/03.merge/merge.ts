/**
 * 声明合并
 */

interface A {
    x: number;
    // y: string;
    foo(bar: number): number; // 5
    foo(bar: 'a'): string; // 2
}

interface A {
    y: number;
    foo(bar: string): string; // 3
    foo(bar: string[]): string[]; // 4
    foo(bar: 'b'): string; // 1
}

const a: A = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}

class C {}
namespace C {
    export const state = 1
}
console.log(C.state)

function Lib() {}
namespace Lib {
    export const version = '1.0'
}
console.log(Lib.version)

enum Color {
    Red,
    Yellow,
    Blue
}
namespace Color {
    export function mix() {}
}
console.log(Color)

export default {}
