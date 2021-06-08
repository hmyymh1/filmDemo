<template lang="">
    <div class="login_body">
        <div>
            <div>
                <input type="text" class="login_text" placeholder="email@example.com">
            </div>
            <div>
                <input type="text" class="login_text" placeholder="パスワード">
            </div>
        </div>
        <div class="login_btn">
            <input type="submit" value="ログイン">
        </div>
        <div class="login_link">
            <a href="">新規登録</a>
            <a href="">パスワードを忘れた？</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
}
</script>
<style lang="scss" scoped>
    .login_body {
        width: 100%;
        margin-top: 10px;
        .login_text {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 5px;
            outline: none;
            text-indent: 10px;
        }
        .login_btn {
            height: 50px;
            margin: 10px;
            input {
                width: 100%;
                height: 100%;
                background-color: red;
                border-radius: 3px;
                border: none;
                display:block;
                color: white;
                font-size: 20px;
            }
        }
        .login_link {
            display: flex;
            justify-content: space-between;
            a {
                text-decoration: none;
                margin: 0 5px;
                font-size: 12px;
                color: red;
            }
        }
    }
</style>