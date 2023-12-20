<template>
    <nav class="filter-nav">
        <button @click="updateFilter('all')" :class=" { active: currentFilter === 'all' } ">View All</button>
        <button @click="updateFilter('completed')" :class=" { active: currentFilter === 'completed' } ">Completed</button>
        <button @click="updateFilter('ongoing')" :class=" { active: currentFilter === 'ongoing' } ">Ongoing</button>
    </nav>
</template>

<script>
export default {
    props: ['currentFilter'],
    methods: {
        updateFilter(by) {
            this.$emit('filter', by)
        }
    }
}
</script>

<style>
.filter-nav button {
    background: none;
    border: none;
    color: #415569;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    margin-top: 100px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
.filter-nav button.active {
    color:  rgb(91, 91, 180);
    font-weight: bold;
}
</style>