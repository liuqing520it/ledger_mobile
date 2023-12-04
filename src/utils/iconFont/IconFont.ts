
const iconFontMap = {"xuanzhong":"58893",
"not_Selected-copy":"58917",
"iconfontjiantou5":"58933",
"xianshimima":"58954",
"yincangmima":"58955",
};

export default function IconFont(name: string) {
    // @ts-ignore
    return String.fromCharCode(iconFontMap[name])
}

export function IconFonts(names: Array<string>){
    let result = [];
    for (let i=0; i<names.length; i++){
        // @ts-ignore
        result.push(iconFontMap[names[i]]);
    }
    return String.fromCharCode(...result)
}

