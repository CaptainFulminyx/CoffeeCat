<script setup>
let visible = true;
function close() {
    visible = false;
}
</script>
<template>
    <div class="drawer" v-if="visible">
        <i-mdi-close
            class="text-ltxt size-7 absolute top-2 right-2"
            @click="close()"
        />
    </div>
</template>
