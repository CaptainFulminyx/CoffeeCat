<script setup>
import { ref } from "vue";
import Header from "$/Header.vue";
import Drawer from "$/Drawer.vue";

const drawerOpen = ref(false);

function openDrawer() {
    drawerOpen.value = true;
}
</script>

<template>
    <div class="w-screen h-screen bg-bg fixed p-2">
        <Header @open-drawer="openDrawer" />
        <Drawer v-model="drawerOpen">
            <h2 class="text-lg font-semibold mb-2">Menu</h2>
            <ul class="space-y-2">
                <li>Home</li>
                <li>Orders</li>
                <li>Profile</li>
            </ul>
        </Drawer>
    </div>
</template>
