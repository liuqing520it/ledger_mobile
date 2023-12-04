
const iconFontMap = {"space":"32",
"uniE625":"58917",
"uniE64A":"58954",
"uniE64B":"58955",
"uniE60D":"58893",
"uniE635":"58933",
};

export default function iconFont(name: string) {
    // @ts-ignore
    return String.fromCharCode(iconFontMap[name])
}

export function iconFonts(names: Array<string>){
    let result = [];
    for (let i=0; i<names.length; i++){
        // @ts-ignore
        result.push(iconFontMap[names[i]]);
    }
    return String.fromCharCode(...result)
}

