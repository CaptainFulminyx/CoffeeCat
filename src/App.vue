<script setup>
import { ref } from "vue";
import Header from "$/Header.vue";
import Drawer from "$/Drawer.vue";
</script>

<template>
    <div class="w-screen h-screen bg-bg fixed p-2">
        <Header />
        <Drawer>
            <h2 class="sm:text-lg lg:text-2xl font-semibold mb-2">Menu</h2>
            <ul class="space-y-2">
                <li>Home</li>
                <li>Orders</li>
                <li>Profile</li>
            </ul>
        </Drawer>
    </div>
</template>
