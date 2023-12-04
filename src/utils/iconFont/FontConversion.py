import sys, os

from fontTools.ttLib import TTFont

tmpl = """
const iconFontMap = {%s};

export default function IconMap(name: string) {
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

"""

def main(fontFile, output):
    try:
        font = TTFont(fontFile)
        glyphMap = font["cmap"].getcmap(3,1).cmap



        tmp = ""
        for k in glyphMap:
            tmp += '"%s":"%s",\n' % (glyphMap[k],k)


        f=open(output,"w+")
        f.write(tmpl % tmp)
        f.close()
    except OSError(err):
        print (err)

if __name__ == '__main__':
	if len(sys.argv) < 2:
		sys.exit()

	if len(sys.argv) == 2 and sys.argv[1] == "-h":
		sys.exit()

	if len(sys.argv) > 2:
		if os.path.exists(sys.argv[1]):
			main(sys.argv[1],sys.argv[2])
		else:
			print("Font file not found.")

		sys.exit()
