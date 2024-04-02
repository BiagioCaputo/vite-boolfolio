<script>
export default {
    name: 'BasePagination',
    props: { links: Array },
    emits: ['change-page']
}
</script>

<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="{ active: link.active, 'disabled': !link.url }">
                <button class="page-link" :disabled="!link.url" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
                <!--v-html invece che v-text per interpolare l'html-->
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
