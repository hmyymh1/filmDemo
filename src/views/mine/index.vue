<template lang="">
    <div id="main">
        <Header />
        <Login />
        <TabBar />
    </div>
</template>
<script>

import Header from "@/components/header"
import TabBar from "@/components/tabBar"
import Login from "@/components/login"

export default {
    name: "mine",
    components: {
        Header,
        TabBar,
        Login,
    }
}
</script>
<style lang="">
    
</style>