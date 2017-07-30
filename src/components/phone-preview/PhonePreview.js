import AppData from "../../models/AppData"

let appData = AppData.shared;
let themeColorData = appData.themeColorData;
let contentColorData = appData.contentColorData;

export default {
    props:{

    },
    data(){
        return {
            themeColorData,
            contentColorData
        }
    },
    computed:{
        statusStyle(){
            return { background: '#' + themeColorData.header_background,
                color: themeColorData.header_status_bar == 'white' ? '#ffffff' : '#333333' }
        },
        headerStyle(){
            return { background: '#' + themeColorData.header_background }
        },
        headerSubTextStyle(){
            return { color: '#' + themeColorData.header_sub_text }
        },
        headerH1Style(){
            return { color: '#' + themeColorData.header_title }
        },
        headerToolButtonStyle(){
            return { color: '#' + themeColorData.header_button_tint }
        },
        contentStyle(){
            return { color: '#' + contentColorData.content_body_text,
                background: '#' + contentColorData.content_background }
        },
        contentSectionStyle(){
            return { 'border-bottom': '1px solid #' + contentColorData.list_table_view_cell_separator }
        },
        contentSectionSelectedCellStyle(){
            return { 'border-bottom': '1px solid #' + contentColorData.list_table_view_cell_separator,
                background: '#' + contentColorData.list_table_view_cell_selected_background }
        },
        contentFolderIconStyle(){
            return { background: '#' + contentColorData.content_directory_icon_tint }
        },
        contentNoteIconStyle(){
            return { border: '2px solid #' + contentColorData.content_note_icon_tint }
        },
        contentDateStyle(){
            return { color: '#' + contentColorData.content_sub_text }
        },
        contentReadMoreStyle(){
            return { color: '#' + contentColorData.content_button_tint,
                border: '1px solid #' + contentColorData.content_button_tint}
        },
        contentWeekdayStyle(){
            return { color: '#' + contentColorData.calendar_weekday_text }
        },
        contentSaturdayStyle(){
            return { color: '#' + contentColorData.calendar_saturday_text }
        },
        contentSundayStyle(){
            return { color: '#' + contentColorData.calendar_sunday_text }
        },
        contentCursorStyle(){
            return { 'border-left': '5px solid #' + contentColorData.content_text_cursor }
        },
        footerToolbarStyle(){
            return {
                background: '#' + themeColorData.footer_toolbar_background,
                color: '#' +  themeColorData.footer_toolbar_button_tint,
                'border-top': '1px solid #' + themeColorData.footer_toolbar_border
            }
        },
        globalMenuStyle(){
            return { background: '#' + themeColorData.global_menu_background }
        },
        globalMenuCurrentStyle(){
            return { border: '3px solid #' + themeColorData.global_menu_button_current }
        },
        globalMenuNormalStyle(){
            return { border: '3px solid #' + themeColorData.global_menu_button_normal }
        },
        globalMenuAddNoteStyle(){
            return { background: '#' + themeColorData.global_menu_button_note,
                     color: '#' + themeColorData.global_menu_background }
        }
    },
    methods:{

    }
}