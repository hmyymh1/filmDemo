<template lang="">
    <div class="detailContainer enterMove" :class="classObj">
        <Header>
            <svg class="icon" aria-hidden="true" @touchstart="handleToBack">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </Header>
        <div id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{background:'url('+ data.thumbnail +')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src=data.thumbnail alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{data.name}}</h2>
                        <p>{{Math.floor(data.rating * 10) / 10}}</p>
                        <p>{{data.genre}}</p>
                        <p>{{country}} / {{time}}</p>
                        <p>{{data.openDateString}} 公開</p>
                    </div>
                </div>               
            </div>
            <div class="detail_intro">
                <p>{{data.synopsis}}</p>
            </div>
            <div class="detail_player swiper-container">
                <swiper :sonlist=data.screenShots v-slot="props">
                    <div>
                        <img :src=props.item alt="">
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>

import Header from "@/components/header"

export default {
    name : 'detailPage',

    data(){
        return {
            data : {},
            country: "",
            time: "",
            classObj : {
                'leaveMove' : false,
            }
        }
    },
    
    components: {
        Header,
    },

    mounted(){
        //console.log(this.$route.params.MovieID);
        this.axios.get('http://127.0.0.1/api/detail?MovieID='+this.$route.params.MovieID)
            .then((res) =>{
                var msg = res.statusText;
                if(msg === "OK"){
                    this.data = res.data.data;
                    this.country = this.data.infoDict.製作国;
                    this.time = this.data.infoDict.上映時間;
                    //console.log(this.data.screenShots);
                }
            })
            .catch(()=>{
                alert("not found detail data");
            })
    },
    
    methods: {
        handleToBack(){
            this.classObj.leaveMove = true;         
            setTimeout(()=>{
                this.$router.back();
            },700)
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .detailContainer {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        min-height:100%;
        background-color: white;
        svg {
            position: absolute;
            left: 5px;
            top: 50%;
            margin-top: -13px;
            font-size: 26px;
        }
        .contentDetail {
            display: block;
            margin-bottom: 0;
        }
        .detail_list {
            height: 200px;
            width: 100%;
            position: relative;
            overflow: hidden;
            .detail_list_bg {
                width: 100%;
                height: 100%;
                filter: blur(20px);
            }
            .detail_list_filter {
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: #40454d;
                opacity: 0.55;
            }
            .detail_list_content {
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
            }
            .detail_list_img {
                width: 108px;
                height: 150px;
                margin: 20px;
                img {
                    height: 100%;
                }
            }
            .detail_list_info {
                margin: 20px;
                h2 {
                    font-size: 20px;
                    color: black;
                    font-weight: normal;
                    line-height: 40px;
                }
                p {
                    line-height: 20px;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
        .detail_intro {
            padding: 10px;
        }
        .detail_player {
            margin: 20px;
            .swiper-slide {
                width: 70px;
                margin-right: 20px;
                text-align: center;
                font-size: 14px;
                img {
                    width: 100%;
                    margin-bottom: 5px;
                }
                p:nth-of-type(2){
                    color: #999;
                }
            }
        }
        &.enterMove {
            animation: 0.7s slideMove;
        }
        @keyframes slideMove {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(0);
            }
        }
        &.leaveMove {
            animation: 0.7s slideMove2;
        }
        @keyframes slideMove2 {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(100%);
            }
        }
    }
</style>