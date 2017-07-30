import AppData from "../../models/AppData"

let appData = AppData.shared;
let themeColorData = appData.themeColorData;

export default {
    props:{

    },
    data(){
        return {
            themeColorData,
        }
    },
    computed:{

    },
    methods:{

    }
}
