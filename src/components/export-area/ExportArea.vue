<template>
    <div class="export-area">
        <h3>XML</h3>
        <textarea v-model="xmlText"
                  ref="xmlTextArea"></textarea>
        <ul>
            <li><button @click="onClipboardClick">Clipboard</button></li>
            <li><button @click="onSaveClick">Save</button></li>
        </ul>
        <transition name="network-log-fade">
            <p class="network-log">{{ networkLog }}</p>
        </transition>
    </div>
</template>
<style lang="sass" src="./ExportArea.scss" scoped></style>
<script src="./ExportArea.js"></script>
