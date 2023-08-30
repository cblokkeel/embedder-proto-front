<script setup>
import { useTemplateStore } from "../stores/templateStore";

const store = useTemplateStore();
</script>

<template>
    <div class="container">
        <h1>Template de prompt</h1>
        <textarea
            class="query-input"
            placeholder="Votre requête"
            v-model="store.template"
        ></textarea>
        <p class="warning">
            Attention: penser à toujours avoir {context} et {question} dans
            votre prompt.
        </p>
        <button class="save-btn">Sauvegarder</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.query-input {
    resize: none;
    min-height: 10%;
    height: fit-content;
    margin-bottom: 10px;
    padding: 10px;
}

.warning {
    color: #f52f57;
    font-size: 12px;
    font-style: italic;
    align-self: flex-start;
    margin: 0;
}

.save-btn {
    margin-top: 20px;
}
</style>
