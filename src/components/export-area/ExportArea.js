import AppData from "../../models/AppData"
import { ColorContentType } from "../../models/ColorContentType"
import XMLEXporter from "../../api/XMLExporter"

let appData = AppData.shared;
let themeColorData = appData.themeColorData;
let contentColorData = appData.contentColorData;

export default {
    props: {
        contentType: {
            type: String,
            default: ()=> ColorContentType.THEME
        }
    },
    data(){
        return {
            networkClearTimerId: 0,
            colorData: this.contentType == ColorContentType.THEME ?
                themeColorData : contentColorData,
            networkLog: ""
        }
    },
    computed:{
        xmlText(){
            return this.colorData.toXMLText();
        }
    },
    mounted(){

    },
    methods:{
        clearNetworkLog(){
            clearTimeout(this.networkClearTimerId);
            this.networkLog = "";
        },
        onClipboardClick(){
            let textarea = this.$refs.xmlTextArea;
            textarea.select();
            try{
                let result = document.execCommand('copy');
                //console.log(result);
            }catch(err){
                console.error(err);
            }
            //console.log(textarea);
        },
        onSaveClick(){
            let exporter = new XMLEXporter();
            exporter.saveText(this.colorData.toXMLText(), this.colorData.fileName)
                .then((result)=>{
                    this.networkLog = "saved";
                    this.networkClearTimerId = setTimeout(()=>{
                        this.clearNetworkLog();
                    }, 1000);
                }).fail(()=>{
                    this.networkLog = "failed";
                    this.networkClearTimerId = setTimeout(()=>{
                        this.clearNetworkLog();
                    }, 1000);
                });
        }
    }
}