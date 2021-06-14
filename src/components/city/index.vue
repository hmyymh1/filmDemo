<template lang="">
    <div class="city_select">
        <ul class="regionList">
            <li v-for="item in regionList" :key="item.regionid" @click="regionSelect(item.name, item.regionid ,item.prefectureList)">
                {{item.name}}
            </li>
        </ul>
        <ul class="prefectureList">
            <li v-for="item in prefectureList" :key="item.id" @click="prefectureSelect(item.name, item.id)">
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
    

    export default {
        name: "city",
        data() {
            return {
                regionList: [],
                prefectureList: [],
                cityList: [],
                region: this.$store.state.region.name,
                prefecture: this.$store.state.prefecture.name,
            }
        },

        mounted() {
            if(window.localStorage.getItem("cityList")){
                this.regionList = JSON.parse(window.localStorage.getItem("cityList"));

                this.prefectureList = this.regionList.filter(
                    item => item.name == this.region
                )[0].prefectureList;
                    
                this.cityList = this.prefectureList.filter(
                    item => item.name == this.prefecture
                )[0].city;
            }else{
                this.axios.get('http://127.0.0.1/api/test')
                    .then((res)=>{
                        var msg = res.statusText;
                        if (msg === "OK"){
                            //console.log(res.data.cityList);
                            this.regionList = res.data.cityList;
                            window.localStorage.setItem("cityList", JSON.stringify(res.data.cityList));

                            this.prefectureList = this.regionList.filter(
                                item => item.name == this.region
                            )[0].prefectureList;
                            
                            this.cityList = this.prefectureList.filter(
                                item => item.name == this.prefecture
                            )[0].city;
                        }                    
                    });
            }
        },

        watch:{
            region(){
                this.prefectureList = this.regionList.filter(
                    item => item.name == this.region
                )[0].prefectureList;
                this.prefecture = this.prefectureList[0].name;
            },

            prefecture(){
                this.cityList = this.prefectureList.filter(
                    item => item.name == this.prefecture
                )[0].city;
            },
        },

        methods: {
            regionSelect(name, id ,list){
                this.$store.commit('region/REGION_INFO',{ name , id });
                this.region = this.$store.state.region.name;
                window.localStorage.setItem('regionNow',JSON.stringify({ name , id}));

                this.$store.commit('prefecture/PREFECTURE_INFO',{ name:list[0].name , id:list[0].id });
                this.prefecture = this.$store.state.prefecture.name;
                window.localStorage.setItem('prefectureNow',JSON.stringify({ name:list[0].name , id:list[0].id}));        
            },
            prefectureSelect(name,id){
                this.$store.commit('prefecture/PREFECTURE_INFO',{ name , id });
                this.prefecture = this.$store.state.prefecture.name;
                window.localStorage.setItem('prefectureNow',JSON.stringify({ name , id}));
            },
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
            li {
                text-align: center;
            }
        }
    }
</style>