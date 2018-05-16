<template>
    <div class="home-container" style="flex: 1; background-color: #F0F0F0;">
        <div class="header">
            <icon name="music"></icon>
            <icon name="music"></icon>
            <icon name="music"></icon>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
    components: {
        Icon
    }
}
</script>

<style>
    .header {
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 750px;
        height: 64px;
    }
</style>
