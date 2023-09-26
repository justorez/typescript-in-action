/**
 * 映射类型
 */

interface Obj {
    a: string
    b: number
    c: boolean
}
type ReadonlyObj = Readonly<Obj>

type PartialObj = Partial<Obj>

type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>
