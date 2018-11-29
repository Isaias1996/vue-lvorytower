<template>
    <div id="login">
        <form id="login-form" class="mui-input-group">
            <div class="mui-input-row">
                <label>账号</label>
                <input id="account" type="text" class="mui-input-clear mui-input" placeholder="请输入账号" data-input-clear="2" v-model="num" value="num" @focus="infocus" @input="infocus" @blur="inblur"><span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input id="password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码" data-input-clear="3" v-model="pwd" value="pwd" @focus="infocus" @input="infocus" @blur="inblur"><span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
            </div>
        </form>
        <div class="mui-content-padded">
            <button id="login" class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>
            <div class="link-area"><router-link to="/member/reg"><a id="reg">注册账号</a></router-link> <span class="spliter">|</span> <a id="forgetPassword">忘记密码</a>
            </div>
        </div>
        <transition name="pop">
            <div class="popup" ref="popup" v-if="show">{{pop}}</div>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:"",
                pwd:"",
                pop:"请正确输入账号密码",
                show:false
            }
        },
        methods:{
            infocus: function (e) {
                //判断是否有数据
                if (e.currentTarget.value) {
                    e.currentTarget.nextElementSibling.classList.remove('mui-hidden')
                } else {
                    e.currentTarget.nextElementSibling.classList.add('mui-hidden')
                }
            },
            inblur: function (e) {
                e.currentTarget.nextElementSibling.classList.add('mui-hidden');
            },
            cles: function (e) {
                e.currentTarget.previousElementSibling.value = '';
            },
            login:function () {
                var values = {
                    num_value:this.num,
                    pwd_value:this.pwd
                }
                if(this.num && this.pwd){
                    this.$http.post('/login',values).then(result =>{
                        if(result.body.err_code===0){
                            //登陆成功后的操作
                            window.location.href = '/#/member/success';
                        }else {
                            //登陆不成功的操作
                            this.pop = result.body.message;
                            this.show = true;
                            setTimeout(() => {
                                this.show = false;
                            }, 2000);
                        }
                    })
                }else {
                    this.pop="请正确输入账号密码";
                    this.show = true;
                    setTimeout(() => {
                        this.show = false;
                    }, 2000);
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-btn-blue, .mui-btn-primary, input[type=submit] {
        border: 1px solid rebeccapurple;
        background-color: rebeccapurple;
    }
    a#reg,a#forgetPassword{
        color: rebeccapurple;
    }

    label{
        font-weight: 200;
    }
    div#login{
        margin-top: 40px;
    }

    .mui-input-group {
        margin-top: 10px;
    }

    .mui-input-group:first-child {
        margin-top: 20px;
    }

    .mui-input-group label {
        width: 22%;
    }

    .mui-content-padded {
        margin-top: 25px;
    }

    .mui-btn {
        padding: 10px;
    }

    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }

    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }

    .mui-input-row label~input,
    .mui-input-row label~select,
    .mui-input-row label~textarea {
        width: 78%;
    }
    /*显示动画*/
    .popup {
        width: 300px;
        text-align: center;
        margin: 20px auto;
        color: red;
        opacity: 1;
    }
    .pop-enter-active, .pop-leave-active {
        transition: opacity .5s ease-out;
    }

    .pop-enter, .pop-leave-to {
        opacity: 0;
    }

</style>