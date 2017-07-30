import AppData from "../../models/AppData"

let appData = AppData.shared;
let contentColorData = appData.contentColorData;

export default {
    props:{

    },
    data(){
        return {
            contentColorData,
        }
    },
    computed:{

    },
    methods:{

    }
}