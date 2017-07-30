<template>
    <div class="phone-container">
        <div class="status" :style="statusStyle">22:45</div>
        <header :style="headerStyle">
            <p class="sub-text" :style="headerSubTextStyle">文字数</p>
            <h1 :style="headerH1Style">ホーム</h1>
            <p class="tool-button" :style="headerToolButtonStyle">編集</p>
        </header>
        <div class="content" :style="contentStyle">
            <section :style="contentSectionStyle">
                <div class="icon-area">
                    <div class="folder-icon" :style="contentFolderIconStyle"></div>
                </div>
                <div class="text-area">
                    <p class="body-text">フォルダです。フォルダ名が入ります。</p>
                </div>
            </section>
            <section :style="contentSectionStyle">
                <div class="icon-area">
                    <div class="note-icon" :style="contentNoteIconStyle"></div>
                </div>
                <div class="text-area">
                    <p class="date" :style="contentDateStyle">2017/08/31</p>
                    <p class="body-text">メモです。本文が入ります。こんな感じです。</p>
                    <p class="read-more"
                        :style="contentReadMoreStyle">続きを読む</p>
                </div>
            </section>
            <section :style="contentSectionStyle">
                <div class="calendar-weekday-text-area">
                    <p class="weekday" :style="contentWeekdayStyle">12<br><span>水</span></p>
                </div>
                <div class="text-area">
                    <p class="date" :style="contentDateStyle">2017/08/31</p>
                    <p class="body-text">メモです。本文が入ります。こんな感じです。</p>
                </div>
            </section>
            <section :style="contentSectionStyle">
                <div class="calendar-weekday-text-area">
                    <p class="saturday" :style="contentSaturdayStyle">15<br><span>土</span></p>
                </div>
                <div class="text-area">
                    <p class="date" :style="contentDateStyle">2017/08/31</p>
                    <p class="body-text">メモです。本文が入ります。こんな感じです。</p>
                </div>
            </section>
            <section :style="contentSectionStyle">
                <div class="calendar-weekday-text-area">
                    <p class="sunday" :style="contentSundayStyle">16<br><span>日</span></p>
                </div>
                <div class="text-area">
                    <p class="date" :style="contentDateStyle">2017/08/31</p>
                    <p class="body-text">カーソルのサンプルです
                        <span class="cursor" :style="contentCursorStyle"></span>
                        本文が入ります。</p>
                </div>
            </section>
            <section :style="contentSectionSelectedCellStyle">
                <div class="icon-area">
                    <div class="note-icon" :style="contentNoteIconStyle"></div>
                </div>
                <div class="text-area">
                    <p class="date" :style="contentDateStyle">2017/08/31</p>
                    <p class="body-text">選択時の背景は、こんな感じです。</p>
                </div>
            </section>
        </div>
        <footer :style="footerToolbarStyle">
            <p class="delete-button">削除</p>
            <p class="move-button">移動</p>
        </footer>
        <div class="global-menu" :style="globalMenuStyle">
            <ul>
                <li class="current">
                    <span :style="globalMenuCurrentStyle"></span>
                </li>
                <li class="normal">
                    <span :style="globalMenuNormalStyle"></span>
                </li>
                <li class="note">
                    <span :style="globalMenuAddNoteStyle">+</span>
                </li>
                <li class="normal">
                    <span :style="globalMenuNormalStyle"></span>
                </li>
                <li class="normal">
                    <span :style="globalMenuNormalStyle"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" src="./PhonePreview.scss" scoped></style>
<script src="./PhonePreview.js"></script>
