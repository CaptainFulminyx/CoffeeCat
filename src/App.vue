<script setup>
import { ref } from "vue";
import Header from "$/Header.vue";
import Drawer from "$/Drawer.vue";
import Home from "#/HomePage.vue";
</script>

<template>
    <div class="w-screen h-screen bg-bg fixed p-2">
        <Header />
        <Drawer />
        <Home />
    </div>
</template>
