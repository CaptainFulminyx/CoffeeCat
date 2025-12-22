<script setup>
const props = defineProps({
    modelValue: Boolean
});

const emit = defineEmits(["update:modelValue"]);

function close() {
    emit("update:modelValue", false);
}
</script>

<template>
    <Transition name="backdrop">
        <div v-if="modelValue" class="backdrop" @click="close"></div>
    </Transition>
    <Transition name="drawer">
        <div v-if="modelValue" class="drawer" @click.stop>
            <i-mdi-close class="closeicon" @click="close" />

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
