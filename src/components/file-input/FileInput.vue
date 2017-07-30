<template>
    <div class="file-input-area">
        <p>File Name</p>
        <input v-model="colorData.fileName">
        <button @click="onImportButtonClick">Load</button>
    </div>
</template>
<style lang="sass" src="./FileInput.scss" scoped></style>
<script src="./FileInput.js"></script>
