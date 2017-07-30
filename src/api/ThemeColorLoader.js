import AppData from "../models/AppData"

let appData = AppData.shared;
let themeColorData = appData.themeColorData;

export default class ThemeColorLoader {
    load(fileName){
        let deferred = $.Deferred();
        $.get({
            url: "jsons/" + fileName,
            dataType:'text'
        }).done((data)=>{
            this.parse(data);
            deferred.resolve(data);
        }).fail((err)=>{
            deferred.reject(err);
        });
        return deferred.promise();
    }

    parse(xmlText){
        let xmlDoc = $.parseXML(xmlText);
        let $xml = $(xmlDoc);
        let resultObj = {};
        $xml.find('key').each((index, ele)=>{
            let $ele = $(ele);
            let key = $ele.text().trim();
            let rawValue = $ele.next().get(0);
            let value = this.parseRawValue(rawValue);
            if(key !== null && value !== null){
                resultObj[key] = value;
            }
        });
        themeColorData.applyObject(resultObj);
        //console.log(resultObj);
    }

    parseRawValue(value){
        let tagName = value.tagName.toLowerCase();
        switch(tagName){
            case 'string':
                return $(value).text().trim();
            case 'integer':
                return parseInt($(value).text(), 10);
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return null;
        }
    }
}