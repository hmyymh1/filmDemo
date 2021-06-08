<template lang="">
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>るろうに剣心　最終章 The Beginning</h2>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-star"></use>
                      </svg> <span class="grade">4.4</span></p>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-like"></use>
                      </svg> <span>22</span></p>
                    <p><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-comment"></use>
                      </svg> <span>0</span></p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://picsum.photos/200/300"></div>
                <div class="info_list">
                    <h2>title</h2>
                    <p>观众评<span class="grade"></span></p>
                    <p>aaaaaaaaaa</p>
                    <p>bbbbbbbb</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "CommingSoon",
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
                width: 150px;
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