enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    js: any
}

// 类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();

    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }

    // 类型保护

    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // typeof
    if (typeof x === 'string') {
        console.log(x.length)
    } else {
        console.log(x.toFixed(2))
    }

    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    return lang;
}

getLanguage(Type.Week, 1)
