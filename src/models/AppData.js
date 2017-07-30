import ThemeColorData from "./ThemeColorData"
import ContentColorData from "./ContentColorData"

let _shared = null;
export default class AppData {

    static get shared() {
        if(!_shared){
            _shared = new AppData();
        }
        return _shared;
    }
    static set shared(value){
        _shared = value;
    }

    themeColorData = new ThemeColorData();
    contentColorData = new ContentColorData();
}
