<script setup>
import { useUIStore } from "@/store/ui";

const ui = useUIStore();
function closeDrawer() {
    ui.drawerOpen = false;
}
</script>

<template>
    <Transition name="backdrop">
        <div v-if="ui.drawerOpen" class="backdrop" @click="closeDrawer"></div>
    </Transition>
    <Transition name="drawer">
        <div v-if="ui.drawerOpen" class="drawer" @click.stop>
            <i-mdi-close class="closeicon" @click="closeDrawer" />

            <div class="text-text-invert p-4">
                <slot />
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
    transition:
        transform 0.3s ease,
        opacity 0.3s ease;
}
.drawer-enter-from,
.drawer-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.backdrop-enter-active,
.backdrop-enter-active-leave-active {
    transition: opacity 0.3s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
    opacity: 0;
}
</style>
