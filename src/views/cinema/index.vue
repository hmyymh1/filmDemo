<template lang="">
    <div id="main">
        <Header />
        <City />
        <CinemaList />
        <TabBar />
    </div>
</template>
<script>

import Header from "@/components/header"
import TabBar from "@/components/tabBar"
import City from "@/components/city"
import CinemaList from "@/components/cinemaList"

export default {
    name: "cinema",
    components: {
        Header,
        TabBar,
        City,
        CinemaList,
    }
}
</script>
<style lang="">
    
</style>