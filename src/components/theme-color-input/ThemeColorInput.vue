<template>
    <div class="input-table">
        
        <section>
            <h3>ヘッダナビ</h3>
            <table>
                <tr>
                    <td>背景色</td>
                    <td>header_background</td>
                    <td><input type="text" v-model="themeColorData.header_background"></td>
                </tr>
                <tr>
                    <td>ステータスバー</td>
                    <td>header_status_bar</td>
                    <td>
                        <select v-model="themeColorData.header_status_bar">
                            <option value="white">white</option>
                            <option value="black">black</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>タイトル文字</td>
                    <td>header_title</td>
                    <td><input type="text" v-model="themeColorData.header_title"></td>
                </tr>
                <tr>
                    <td>サブテキスト</td>
                    <td>header_sub_text</td>
                    <td><input type="text" v-model="themeColorData.header_sub_text"></td>
                </tr>
                <tr>
                    <td>ボタン</td>
                    <td>header_button_tint</td>
                    <td><input type="text" v-model="themeColorData.header_button_tint"></td>
                </tr>
            </table>
        </section>
        
        <section>
            <h3>フッターツールバー</h3>
            <table>
                <tr>
                    <td>背景色</td>
                    <td>footer_toolbar_background</td>
                    <td><input type="text" v-model="themeColorData.footer_toolbar_background"></td>
                </tr>
                <tr>
                    <td>背景ボーダー</td>
                    <td>footer_toolbar_border</td>
                    <td><input type="text" v-model="themeColorData.footer_toolbar_border"></td>
                </tr>
                <tr>
                    <td>ボタン</td>
                    <td>footer_toolbar_button_tint</td>
                    <td><input type="text" v-model="themeColorData.footer_toolbar_button_tint"></td>
                </tr>
            </table>
        </section>
        
        <section>
            <h3>グローバルメニュー</h3>
            <table>
                <tr>
                    <td>背景色</td>
                    <td>global_menu_background</td>
                    <td><input type="text" v-model="themeColorData.global_menu_background"></td>
                </tr>
                <tr>
                    <td>ボタンカレント</td>
                    <td>global_menu_button_current</td>
                    <td><input type="text" v-model="themeColorData.global_menu_button_current"></td>
                </tr>
                <tr>
                    <td>ボタンノーマル</td>
                    <td>global_menu_button_normal</td>
                    <td><input type="text" v-model="themeColorData.global_menu_button_normal"></td>
                </tr>
                <tr>
                    <td>メモ作成</td>
                    <td>global_menu_button_note</td>
                    <td><input type="text" v-model="themeColorData.global_menu_button_note"></td>
                </tr>
            </table>
        </section>
    </div>
</template>
<style lang="sass" src="./ThemeColorInput.scss" scoped></style>
<script src="./ThemeColorInput.js"></script>
