import XMLConverter from "../models/XMLConverter"

export default class XMLExporter {
    saveObject(obj, fileName){
        let xmlText = XMLConverter.toXMLString(obj);
        return this.saveText(xmlText, fileName);
    }

    saveText(text, fileName){
        let deferred = $.Deferred();
        let encodedName = encodeURI(fileName);
        let encodedText = encodeURI(text);
        $.post({
            url:"http://localhost:8097/text-export",
            data:{
                file: encodedName,
                text: encodedText
            }
        }).then((data)=>{
            //console.log('complete', data);
            deferred.resolve(data);
        }).fail((err)=>{
            console.error(err);
            deferred.reject(err);
        })
        return deferred.promise();
    }
}