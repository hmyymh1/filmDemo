<template lang="">
    <div class="movie_body">
        <ul>
            <li v-for="item in MovieList" :key="item.id">
                <div class="pic_show"><img :src="item.thumbnail"></div>
                <div class="info_list">
                    <h2>{{item.name}}</h2>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-star"></use>
                      </svg> <span class="grade">{{item.rating == 0 ? "- -" : item.rating.toFixed(1)}}</span></p>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-like"></use>
                      </svg> <span>{{item.favCount}}</span></p>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-comment"></use>
                      </svg> <span>{{item.rateCount}}</span></p>
                </div>
                <div class="btn_mail">
                    予約
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "NowPlaying",

    data(){
        return {
            MovieList: [],
        }
    },
    
    mounted(){
        this.axios.get('http://127.0.0.1/api/test')
                .then((res)=>{
                    var msg = res.statusText;
                    if (msg === "OK"){
                        //console.log(res.data.MovieList);
                        this.MovieList = res.data.MovieList;
                    }                    
                });
    }

}
</script>
<style lang="scss" scoped>
    #content .movie_body {
        flex: 1;
        overflow: auto;
        ul {
            margin: 0 12px;
            overflow: hidden;
            li {
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e6e6e6;
                padding-bottom: 10px;
            }
        }
        .pic_show {
            width: 80px;
            height: 113px;
            background-color: grey;
            img {
                width: 80px;
            }
        }
        .info_list {
            margin-left: 10px;
            flex: 1;
            position: relative;
            h2 {
                font-size: 17px;
                line-height: 24px;
                width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p {
                font-size: 13px;
                color: #666;
                line-height: 22px;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .grade {
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
            }
            img {
                width: 50px;
                position: absolute;
                right: 10px;
                top: 5px;
            }
        }
        .btn_mail {
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            background-color: red;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
        }
    }
</style>