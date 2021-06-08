<template lang="">
    <div class="city_select">
        <select class="regionList">
            <option value="北海道">北海道</option>
            <option value="東北">東北</option>
            <option value="関東" selected>関東</option>
            <option value="甲信越・北陸">甲信越・北陸</option>
            <option value="東海">東海</option>
            <option value="近畿">近畿</option>
            <option value="中・四国">中・四国</option>
            <option value="九州・沖縄">九州・沖縄</option>
            <option value="オンライン">オンライン</option>
        </select>
        <select class="prefectureList">
            <option value="東京都" selected>東京都</option>
            <option value="神奈川県">神奈川県</option>
            <option value="埼玉県">埼玉県</option>
            <option value="千葉県">千葉県</option>
            <option value="茨城県">茨城県</option>
            <option value="栃木県">栃木県</option>
            <option value="群馬県">群馬県</option>
        </select>
        <select class="cityList">
            <option value="" selected>全て</option>
            <option value="渋谷">渋谷</option>
            <option value="新宿">新宿</option>
            <option value="有楽町">有楽町</option>
            <option value="池袋">池袋</option>
            <option value="銀座">銀座</option>
            <option value="吉祥寺">吉祥寺</option>
            <option value="蒲田">蒲田</option>
            <option value="六本木">六本木</option>
            <option value="錦糸町">錦糸町</option>
            <option value="神保町">神保町</option>
            <option value="北千住">北千住</option>
            <option value="南町田">南町田</option>
            <option value="木場">木場</option>
            <option value="武蔵村山">武蔵村山</option>
            <option value="秋川">秋川</option>
            <option value="大森">大森</option>
            <option value="飯田橋">飯田橋</option>
            <option value="三軒茶屋">三軒茶屋</option>
            <option value="品川">品川</option>
            <option value="多摩センター">多摩センター</option>
            <option value="平和島">平和島</option>
            <option value="お台場">お台場</option>
            <option value="東武練馬">東武練馬</option>
            <option value="下高井戸">下高井戸</option>
            <option value="新橋">新橋</option>
            <option value="立川">立川</option>
            <option value="大泉">大泉</option>
            <option value="恵比寿">恵比寿</option>
            <option value="水道橋">水道橋</option>
            <option value="西新井">西新井</option>
            <option value="府中">府中</option>
            <option value="南大沢">南大沢</option>
            <option value="下北沢">下北沢</option>
            <option value="八王子">八王子</option>
            <option value="船堀">船堀</option>
            <option value="東中野">東中野</option>
            <option value="昭島">昭島</option>
            <option value="亀有">亀有</option>
            <option value="目黒">目黒</option>
            <option value="としまえん">としまえん</option>
            <option value="豊洲">豊洲</option>
            <option value="阿佐ヶ谷">阿佐ヶ谷</option>
            <option value="高田馬場">高田馬場</option>
            <option value="青梅">青梅</option>
            <option value="日本橋">日本橋</option>
            <option value="玉川">玉川</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: "city",
    }
</script>
<style lang="scss" scoped>
    .city_select {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        select {
            flex: 1;
        }
    }
</style>