<template>
    <div class="wrapper">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    }),

    methods: {
        test () {

        },
    },
}
</script>

<style scoped>

</style>
