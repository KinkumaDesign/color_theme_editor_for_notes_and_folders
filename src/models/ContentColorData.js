import XMLConverter from "./XMLConverter"

export default class ContentColorData {

    fileName = "content_basic001.plist";

    //フォルダアイコン
    content_directory_icon_tint = "8bdce9";
    //メモアイコン
    content_note_icon_tint = "999999";
    //本文
    content_body_text = "000000";
    //サブテキスト
    content_sub_text = "888888";
    //背景
    content_background = "ffffff";
    //カーソル
    content_text_cursor = "007aff";
    //キーボード
    content_keyboard_appearance = "default"; //or dark
    //ボタンティント
    content_button_tint = "007aff";
    //セル分割線
    list_table_view_cell_separator = "cccccc";
    //セル選択時背景
    list_table_view_cell_selected_background = "e0e0e0";
    //カレンダー平日
    calendar_weekday_text = "333333";
    //カレンダー土曜日
    calendar_saturday_text = "4889D8";
    //カレンダー日曜日
    calendar_sunday_text = "e25465";

    applyObject(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    toPlainObject(){
        return {
            content_directory_icon_tint: this.content_directory_icon_tint,
            content_note_icon_tint: this.content_note_icon_tint,
            content_body_text: this.content_body_text,
            content_sub_text: this.content_sub_text,
            content_background: this.content_background,
            content_text_cursor: this.content_text_cursor,
            content_keyboard_appearance: this.content_keyboard_appearance,
            content_button_tint: this.content_button_tint,

            list_table_view_cell_separator: this.list_table_view_cell_separator,
            list_table_view_cell_selected_background: this.list_table_view_cell_selected_background,

            calendar_weekday_text: this.calendar_weekday_text,
            calendar_saturday_text: this.calendar_saturday_text,
            calendar_sunday_text: this.calendar_sunday_text,
        }
    }

    toXMLText(){
        return XMLConverter.toXMLString(this.toPlainObject());
    }
}