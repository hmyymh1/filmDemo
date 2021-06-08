<template lang="">
    <footer id="footer">
        <ul>
            <li>
                <router-link to="/movie">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-movie"></use>
                    </svg>
                    <p>作品</p>
                </router-link>
            </li>
            <li>
                <router-link to="/cinema">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bx-camera-movie"></use>
                    </svg>
                    <p>映画館</p>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-my"></use>
                    </svg>
                    <p>マイページ</p>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>

export default {
    name : "MovieDemo",
}
</script>

<style lang="scss" scoped>
    #footer {
        width: 100%;
        height: 50px;
        background: white;
        border-top: 2px solid red;
        position: fixed;
        left: 0;
        bottom: 0;
        ul {
            display: flex;
            text-align: center;
            height: 50px;
            align-items: center;
            li {
                width: calc(100% / 3);
                height: 40px;
                .active {
                    color: red;
                }
                .router-link-active p{
                    color: red;
                }
            }
            p {
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
</style>