<template lang="">
    <div class="cinema_body">
        <ul>
            <li v-for="cinema in cinemaList" :key="cinema.id">
                <div class="name">
                    <span>{{cinema.name}}</span>
                </div>
                <div class="address">
                    <span>{{cinema.address}}</span>
                    <span><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-MAPPIN"></use>
                    </svg>map</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "cinemaList",

    data(){
        return {
            cinemaList : [],
        }
    },

    mounted(){
        this.axios.get('http://127.0.0.1/api/test')
            .then((res) =>{
                var mgs = res.statusText;
                if(mgs === "OK"){
                    console.log(res.data.cinemaList);
                    this.cinemaList = res.data.cinemaList;
                }
            })
    }
}
</script>
<style lang="scss" scoped>
    .cinema_body {
        flex: 1;
        overflow: auto;
        ul {
            padding: 20px;
            li {
                border-bottom: 1px solid #e6e6e6;
                margin-bottom: 20px;
            }
        }
        div {
            margin-bottom: 10px;
        }
        .address {
            font-size: 15px;
            display: flex;
            span:nth-of-type(1) {
                flex: 1;
            }
            span:nth-of-type(2) {                
                align-self: flex-end;
            }
        }
    }
</style>