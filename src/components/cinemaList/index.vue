<template lang="">
    <div class="cinema_body">
        <ul>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-MAPPIN"></use>
                    </svg>map</span>
                </div>
            </li>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span>map</span>
                </div>
            </li>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span>map</span>
                </div>
            </li>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span>map</span>
                </div>
            </li>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span>map</span>
                </div>
            </li>
            <li>
                <div class="name">
                    <span>109シネマズグランベリーパーク</span>
                </div>
                <div class="address">
                    <span>東京都町田市鶴間3-4-1 グランベリーパーク内</span>
                    <span>map</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "cinemaList",
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
            font-size: 18px;
            span:nth-of-type(2) {
                float: right;
            }
        }
    }
</style>