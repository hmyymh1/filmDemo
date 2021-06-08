<template lang="">
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img"><img src="https://picsum.photos/200/300"></div>
                    <div class="info">
                        <p><span>title</span><span>2</span></p>
                        <p>aaaaaa</p>
                        <p>bbbbbb</p>
                        <p>2018-1-1</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="https://picsum.photos/200/300"></div>
                    <div class="info">
                        <p><span>title</span><span>2</span></p>
                        <p>aaaaaa</p>
                        <p>bbbbbb</p>
                        <p>2018-1-1</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "search",
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
                width: 60px;
                float: left;
                img {
                    width: 100%;
                }
            }
            .info {
                float: left;
                margin-left: 15px;
                flex: 1;
                p {
                    height: 22px;
                    display: flex;
                    line-height: 22px;
                    font-size: 12px;
                    &:nth-of-type(1) {
                        span:nth-of-type(1) {
                            font-size: 18px;
                            flex: 1;
                        }
                        span:nth-of-type(2) {
                            font-size: 16px;
                            color: #fc7103;
                        }
                    }    
                }
            }
        }
    }
</style>