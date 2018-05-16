<template>
    <text class="icon">{{iconNames[name]}}</text>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        }
    },

    data: () => ({
        iconNames: {
            music: '\ue61a'
        }
    }),

    beforeCreate () {
        const dom = weex.requireModule('dom')
        dom.addRule('fontFace', {
            fontFamily: 'iconFont',
            src: 'url("//at.alicdn.com/t/font_669247_ksjv86xqm91i3sor.ttf")'
        })
    }
}
</script>

<style scoped>
    .icon {
        font-family: iconFont;
        font-size: 36px;
        color: #333333;
        width: 40px;
        height: 40px;
    }
</style>
