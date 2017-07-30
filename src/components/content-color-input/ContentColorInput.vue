<template>
    <div class="input-table">
        
        <section>
            <h3>メモ</h3>
            <table>
                <tr>
                    <td>フォルダアイコン</td>
                    <td>content_directory_icon_tint</td>
                    <td><input type="text" v-model="contentColorData.content_directory_icon_tint"></td>
                </tr>
                <tr>
                    <td>メモアイコン</td>
                    <td>content_note_icon_tint</td>
                    <td><input type="text" v-model="contentColorData.content_note_icon_tint"></td>
                </tr>
                <tr>
                    <td>本文</td>
                    <td>content_body_text</td>
                    <td><input type="text" v-model="contentColorData.content_body_text"></td>
                </tr>
                <tr>
                    <td>サブテキスト</td>
                    <td>content_sub_text</td>
                    <td><input type="text" v-model="contentColorData.content_sub_text"></td>
                </tr>
                <tr>
                    <td>背景</td>
                    <td>content_background</td>
                    <td><input type="text" v-model="contentColorData.content_background"></td>
                </tr>
                <tr>
                    <td>文字カーソル</td>
                    <td>content_text_cursor</td>
                    <td><input type="text" v-model="contentColorData.content_text_cursor"></td>
                </tr>
                
                <tr>
                    <td>キーボード</td>
                    <td>content_keyboard_appearance</td>
                    <td>
                        <select v-model="contentColorData.content_keyboard_appearance">
                            <option value="default">default</option>
                            <option value="dark">dark</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>ボタンティント</td>
                    <td>content_button_tint</td>
                    <td><input type="text" v-model="contentColorData.content_button_tint"></td>
                </tr>
            </table>
        </section>
        
        <section>
            <h3>セル</h3>
            <table>
                <tr>
                    <td>分割線</td>
                    <td>list_table_view_cell_separator</td>
                    <td><input type="text" v-model="contentColorData.list_table_view_cell_separator"></td>
                </tr>
                <tr>
                    <td>選択時背景</td>
                    <td>list_table_view_cell_selected_background</td>
                    <td><input type="text" v-model="contentColorData.list_table_view_cell_selected_background"></td>
                </tr>
            </table>
        </section>
        
        <section>
            <h3>カレンダー</h3>
            <table>
                <tr>
                    <td>平日</td>
                    <td>calendar_weekday_text</td>
                    <td><input type="text" v-model="contentColorData.calendar_weekday_text"></td>
                </tr>
                <tr>
                    <td>土曜日</td>
                    <td>calendar_saturday_text</td>
                    <td><input type="text" v-model="contentColorData.calendar_saturday_text"></td>
                </tr>
                <tr>
                    <td>日曜日</td>
                    <td>calendar_sunday_text</td>
                    <td><input type="text" v-model="contentColorData.calendar_sunday_text"></td>
                </tr>
            </table>
        </section>
    </div>
</template>
<style lang="sass" src="./ContentColorInput.scss" scoped></style>
<script src="./ContentColorInput.js"></script>
