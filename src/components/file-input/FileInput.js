import AppData from "../../models/AppData"
import { ColorContentType } from "../../models/ColorContentType"
import ThemeColorLoader from "../../api/ThemeColorLoader"
import ContentColorLoader from "../../api/ContentColorLoader"

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
            colorData: this.contentType == ColorContentType.THEME ?
                themeColorData : contentColorData
        }
    },
    mounted(){

    },
    methods:{
        onImportButtonClick(){
            if(this.contentType == ColorContentType.THEME){
                let themeApi = new ThemeColorLoader();
                themeApi.load(this.colorData.fileName);
            }else if(this.contentType == ColorContentType.CONTENT){
                let contentApi = new ContentColorLoader();
                contentApi.load(this.colorData.fileName);
            }
        }
    }
}