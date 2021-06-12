<template lang="">
    <div class="city_select">
        <ul class="regionList">
            <li v-for="item in regionList" :key="item.regionid" @click="regionSelect">
                {{item.name}}
            </li>
        </ul>
        <ul class="prefectureList">
            <li v-for="item in prefectureList" :key="item.id" @click="prefectureSelect">
                {{item.name}}
            </li>
        </ul>
        <ul class="cityList">
            <li v-for="item in cityList" :key="item.citycode">
                {{item.city}}
            </li>
        </ul>
    </div>
</template>
<script>
    /* import axios from "axios" */

    export default {
        name: "city",
        data() {
            return {
                regionList: [],
                prefectureList: [],
                cityList: [],
                region: "",
                prefecture: "",
            }
        },

        mounted() {
            this.axios.get('http://127.0.0.1/api/test')
                .then((res)=>{
                    var msg = res.statusText;
                    if (msg === "OK"){
                        //console.log(res.data.cityList);
                        this.regionList = res.data.cityList;
                        this.prefectureList = this.regionList[0].prefectureList;
                        this.cityList = this.prefectureList[0].city
                    }                    
                });
        },

        methods: {
            regionSelect(e){
                this.region = e.currentTarget.innerHTML;
                this.prefectureList = this.regionList.filter(
                        item => item.name == this.region
                )[0].prefectureList;
                this.cityList = this.prefectureList[0].city;                
            },
            prefectureSelect(e){
                this.prefecture = e.currentTarget.innerHTML;
                this.cityList = this.prefectureList.filter(
                        item => item.name == this.prefecture
                )[0].city;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .city_select {
        width: 100%;
        height: 80px;
        overflow: hidden;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        ul {
            flex: 1;
            overflow: auto;
        }
    }
</style>