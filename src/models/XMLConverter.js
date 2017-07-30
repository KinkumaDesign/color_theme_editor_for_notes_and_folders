const PRE_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>`;
const AFTER_CONTENT = `</dict>
</plist>`;
const TAB_SPACE = '    ';

/**
 * 1階層のみXMLのテキストに書き出す
 */
export default class XMLConverter {
    static toXMLString(obj){
        let xmlText = '';

        for(let key in obj) {
            let value = obj[key];
            let valueType = (typeof value).toLowerCase();
            if(valueType == "number"){
                xmlText += XMLConverter.integerText(key, value);
            }else if(valueType == "string"){
                xmlText += XMLConverter.stringText(key, value);
            }else if(valueType == "boolean"){
                xmlText += XMLConverter.boolText(key, value);
            }
            //console.log(valueType, value);
        }
        return PRE_CONTENT + '\n' + xmlText + AFTER_CONTENT;
    }

    static stringText(key, text){
        return `${TAB_SPACE}<key>${key}</key>
${TAB_SPACE}<string>${text}</string>\n`;
    }

    static integerText(key, num){
        return `${TAB_SPACE}<key>${key}</key>
${TAB_SPACE}<integer>${num}</integer>\n`;
    }

    static boolText(key, value){
        let valueXML = value ? '<true/>' : '<false/>'
        return `${TAB_SPACE}<key>${key}</key>
${TAB_SPACE}${valueXML}\n`;
    }
}