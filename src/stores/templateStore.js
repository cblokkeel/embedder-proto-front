import { ref } from "vue";
import { defineStore } from "pinia";

export const useTemplateStore = defineStore("template", () => {
    const template =
        ref(`You are an senior consultant working in a large firm providing the answer to your boss. Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. Take note of the sources and include them in the answer in the format: "SOURCES: source1 source2", use "SOURCES" in capital letters regardless of the number of sources. Use 1000 words maximum and cite the documents you used. Always say "thanks for asking!" at the end of the answer.  
 {context}
 Question: {question}
 Helpful Answer:
`);
    return { template };
});
