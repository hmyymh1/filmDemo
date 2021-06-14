<template lang="">
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <input type="text" v-model="searchValue" placeholder="作品を検索" >
            </div>
        </div>
        <div class="search_result">
            <bScroll :content="searchValue">            
                <ul>                
                    <li v-for="item in searchList" :key="item.id">
                        <div class="img"><img :src="item.thumbnail"></div>
                        <div class="info">
                            <h2>{{item.name}}</h2>
                            <p>{{item.genre}}</p>
                            <p>{{item.openDateString}} 公開</p>
                            <p class="count">{{item.rating == 0 ? "- -" : item.rating.  toFixed(1)}}</p>
                        </div>
                    </li>
                </ul>
            </bScroll>
        </div>
    </div>
</template>
<script>
export default {
    name: "search",

    data(){
        return {
            MovieList: [],
            searchValue : "",
        }
    },
    
    mounted(){
        this.axios.get('http://127.0.0.1/api/test')
                .then((res)=>{
                    var msg = res.statusText;
                    if (msg === "OK"){
                        //console.log(res.data);
                        this.MovieList = res.data.MovieList.concat(res.data.MovieListCommingSoon);
                    }                    
                });
    },

    computed:{
        searchList(){
            return this.MovieList.filter(
                item => item.name.indexOf(this.searchValue) > 0
            )
        },
    }
}
</script>
<style lang="scss" scoped>
    #content .search_body {
        flex: 1;
        overflow: auto;
        .search_input {
            padding: 8px 10px;
            background-color: #f5f5f5;
            border: 1px solid #e5e5e5;
            .search_input_wrapper {
                padding: 0 10px;
                border: 1px solid #e6e6e6;
                border-radius: 5px;
                background-color: #fff;
                display: flex;
                input {
                    border: none;
                    font-size: 13px;
                    color: #333;
                    padding: 4px 0;
                    outline: none;
                    margin-left: 5px;
                    width: 100%;
                }
            }
        }
        .search_result {
            height: calc(100% - 43px);
            overflow: hidden;
            h3 {
                font-size: 15px;
                color: #999;
                padding: 9px 15px;
                border-bottom: 1px solid #e6e6e6;
            }
            li {
                border-bottom: 1px dashed #c9c9c9;
                padding: 10px 15px;
                box-sizing: border-box;
                display: flex;
            }
            .img {
                width: 80px;
                float: left;
                img {
                    width: 100%;
                }
            }
            .info {                
                margin-left: 10px;
                flex: 1;
                position: relative;
                display: flex;
                flex-direction: column;
                h2 {
                    font-size: 17px;
                    line-height: 24px;
                    width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    flex:1;
                    margin-bottom: 10px;
                    
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
                .count {
                    position: absolute;
                    top: 0;
                    right: 10px;
                    text-align: right;
                    font-weight: 700;
                    color: #faaf00;
                    font-size: 15px;                    
                }
            }
        }
    }
</style>