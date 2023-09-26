declare namespace umdLib {
    const version: string
    function doSomething(): void
}

// umd 库必须有加上这种导出
export as namespace umdLib

export = umdLib
