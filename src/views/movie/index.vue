<template lang="">
    <div id="main">
        <Header />
            <div id="content">
                <div class="movie_menu">                   
                    <div class="hot_swtich">
                        <router-link to="/movie/nowPlaying">
                            <div class="hot_item">上映中</div>
                        </router-link>
                        <router-link to="/movie/commingSoon">
                            <div class="hot_item">公開予定</div>
                        </router-link>
                        <router-link to="/movie/search">
                            <div class="hot_item">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-search"></use>
                                </svg>
                            </div>
                        </router-link>
                    </div>
                </div>

                <router-view v-slot="{ Component }">
                    <keep-alive>
                      <component :is="Component" />
                    </keep-alive>
                </router-view>   
            </div>
        <TabBar />
    </div>
</template>
<script>

import Header from "@/components/header"
import TabBar from "@/components/tabBar"

export default {
    name: "movie",
    components: {
        Header,
        TabBar,
    }
}

</script>

<style lang="scss" scoped>
    #content {
        flex: 1;
        overflow: auto;
        margin-bottom: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        .movie_menu {
            width: 100%;
            height: 45px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            margin-bottom: 3px;
            .hot_swtich {
                display: flex;
                height: 100%;
                line-height: 45px;
                .hot_item {
                    overflow: hidden;
                    font-size: 15px;
                    color: #666;
                    width: calc(100vw / 3);
                    text-align: center;
                    font-weight: 700;
                    svg {
                        font-size: 20px;
                    }
                }
                .router-link-active .hot_item{
                    color: red;
                    border-bottom: 2px solid red;
                }
            }
        }
    }
</style>