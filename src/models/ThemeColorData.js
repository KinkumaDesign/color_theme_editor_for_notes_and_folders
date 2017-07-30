import XMLConverter from "./XMLConverter"

export default class ThemeColorData {

    fileName = "theme_basic001.plist";

    //ヘッダナビ ====
    //背景色
    header_background = "f9f9f9";
    //ステータスバー
    header_status_bar = "black"; //or white
    //タイトルテキスト
    header_title = "121212";
    //サブテキスト
    header_sub_text = "555555";
    //ボタン
    header_button_tint = "007aff";

    //フッターツールバー ====
    //背景色
    footer_toolbar_background = "f9f9f9";
    //背景ボーダー
    footer_toolbar_border = "b2b2b2";
    //ボタン
    footer_toolbar_button_tint = "007aff";

    //グローバルメニュー ====
    //背景色
    global_menu_background = "323b3d";
    //ボタンカレント
    global_menu_button_current = "199cdd";
    //ボタンノーマル
    global_menu_button_normal = "838e91";
    //メモ作成
    global_menu_button_note = "ffffff";

    constructor(){

    }

    applyObject(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    toPlainObject(){
        return {
            header_background: this.header_background,
            header_status_bar: this.header_status_bar,
            header_title: this.header_title,
            header_sub_text: this.header_sub_text,
            header_button_tint: this.header_button_tint,

            footer_toolbar_background: this.footer_toolbar_background,
            footer_toolbar_border: this.footer_toolbar_border,
            footer_toolbar_button_tint: this.footer_toolbar_button_tint,

            global_menu_background: this.global_menu_background,
            global_menu_button_current: this.global_menu_button_current,
            global_menu_button_normal: this.global_menu_button_normal,
            global_menu_button_note: this.global_menu_button_note
        }
    }

    toXMLText(){
        return XMLConverter.toXMLString(this.toPlainObject());
    }
}
