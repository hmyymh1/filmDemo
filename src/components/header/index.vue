<template lang="">
    <header id="header">
        <slot></slot>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name : "MovieDemo",
    props : {
        title : {
            type: String,
            default: "MovieDemo"
        }
    }
}
</script>

<style lang="scss" scoped>
    #header {
        width: 100vw;
        height: 50px;
        color: #fff;
        background-color: red;
        border-bottom: 1px solid red;
        position: relative;
        h1 {
            font-size: 18px;
            text-align: center;
            line-height: 50px;
            font-weight: normal;
        }
    }
</style>