<script setup>
import { ref } from "vue";
import axios from "axios";
import { useTemplateStore } from "../stores/templateStore";
const query = ref("");
const resp = ref("");
const wait = ref(false);

const store = useTemplateStore();

async function sendQuery() {
    console.log(query.value);
    const body = {
        template: store.template,
        question: query.value,
    };
    console.log(body);
    query.value = "";
    wait.value = true;
    const apiResp = await axios.post(
        "http://localhost:5000/api/v1/search",
        body,
    );
    wait.value = false;
    resp.value = apiResp.data.result;
}
</script>

<template>
    <div class="container">
        <textarea
            class="query-input"
            placeholder="Votre requête"
            v-model="query"
            @keyup.enter.exact="sendQuery"
        >
        </textarea>

        <p v-if="wait">En attente d'une réponse... Veuillez patienter</p>
        <div class="resp-container" v-if="resp !== ''">
            {{ resp }}
        </div>
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
    padding: 1rem;
    margin-bottom: 5rem;
}

.resp-container {
    text-align: left;
}
</style>
