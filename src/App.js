import PhonePreview from "./components/phone-preview/PhonePreview.vue"
import ThemeColorInput from "./components/theme-color-input/ThemeColorInput.vue"
import ContentColorInput from "./components/content-color-input/ContentColorInput.vue"
import FileImport from "./components/file-input/FileInput.vue"
import ExportArea from "./components/export-area/ExportArea.vue"
import XMLEXporter from "./api/XMLExporter"

const TAB_TYPE_THEME = "theme";
const TAB_TYPE_CONTENT = "content";

export default{
    props:{
        settings:{
            type:Object,
            default:()=> {
                return {};
            }
        }
    },
    data(){
        return{
            currentTab: TAB_TYPE_THEME
        }
    },
    computed:{

    },
    components:{
        PhonePreview,
        ThemeColorInput,
        ContentColorInput,
        FileImport,
        ExportArea
    },
    created(){

    },
    mounted(){

    },
    methods:{
        onSwitchTabClick(tabType){
            if(tabType == this.currentTab){
                return;
            }
            this.currentTab = tabType;
        }
    }
}
