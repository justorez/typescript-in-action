<template>
    <h1>Hello {{ name }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            name: 'TypeScript'
        }
    }
})
</script>

<style scoped>
h1 {
    color: blue
}
</style>