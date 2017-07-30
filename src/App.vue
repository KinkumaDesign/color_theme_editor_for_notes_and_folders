<template>
<div id="app">
    <phone-preview></phone-preview>
    
    <div class="edit-area">
        <div class="switch-tab-menu">
            <ul>
                <li :class="{ current: currentTab == 'theme' }"
                    @click="onSwitchTabClick('theme')">テーマ</li>
                <li :class="{ current: currentTab == 'content' }"
                    @click="onSwitchTabClick('content')">メモ</li>
            </ul>
        </div>
        <div v-show="currentTab == 'theme'"
          class="theme-color-container">
            <theme-color-input></theme-color-input>
            <div class="io-area">
                <file-import
                    :content-type="'theme'"></file-import>
                <export-area
                    :content-type="'theme'"></export-area>
            </div>
        </div>
        <div v-show="currentTab == 'content'"
          class="content-color-container">
            <content-color-input></content-color-input>
            <div class="io-area">
                <file-import
                  :content-type="'content'"></file-import>
                <export-area
                  :content-type="'content'"></export-area>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="sass" src="./common/reset.scss" />
<style lang="sass" src="./App.scss" />
<script src="./App.js"></script>
