<template>
    <div id="regs">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>账号</label>
                <input id="account" type="text" class="mui-input-clear mui-input" placeholder="请输入账号"
                       data-input-clear="1" @focus="infocus" @input="infocus" @blur="inblur" ref="mynumber" or="false">
                <span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
                <span class="tisp" ref="tisp_number">{{mynumber}}</span>
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input id="password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码"
                       data-input-clear="2" @focus="infocus" @input="infocus" @blur="inblur" ref="mypwd" or="false">
                <span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
                <span class="tisp" ref="tisp_pwd">{{pwd}}</span>
            </div>
            <div class="mui-input-row">
                <label>确认</label>
                <input id="password_confirm" type="password" class="mui-input-clear mui-input" placeholder="请确认密码"
                       data-input-clear="3" @focus="infocus" @input="infocus" @blur="inblur" ref="mynpwd" or="false">
                <span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
                <span class="tisp" ref="tisp_npwd">{{npwd}}</span>
            </div>
            <div class="mui-input-row">
                <label>邮箱</label>
                <input id="email" type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱"
                       data-input-clear="4" @focus="infocus" @input="infocus" @blur="inblur" ref="myemail" or="false">
                <span class="mui-icon mui-icon-clear mui-hidden" @mousedown="cles"></span>
                <span class="tisp" ref="tisp_email">{{myemail}}</span>
            </div>
        </form>
        <div class="mui-content-padded">
            <button id="reg" class="mui-btn mui-btn-block mui-btn-primary" @click="register">注册</button>
        </div>
        <transition name="pop">
            <div class="popup" ref="popup" v-if="show">{{pop}}</div>
        </transition>
        <div class="Shelter" ref="shelter"><p>恭喜你注册成功，将在3秒钟后跳转到登陆页</p></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mynumber: "请输入字母加数字",
                myemail: "请输入邮箱地址",
                pwd: "请输入8位数以上密码",
                npwd: "确保与上面输入相同",
                show: false,
                pop:"你的输入有误，请仔细检查"
            }
        },
        created() {

        },
        methods: {
            infocus: function (e) {
                //判断是否有数据
                if (e.currentTarget.value) {
                    e.currentTarget.nextElementSibling.classList.remove('mui-hidden')
                } else {
                    e.currentTarget.nextElementSibling.classList.add('mui-hidden')
                }
                var data_input_clear = e.currentTarget.getAttribute('data-input-clear');
                var myvalue = e.currentTarget.value;
                var reg_email = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
                var reg_number = new RegExp("^[a-zA-Z0-9]{4,12}$");
                switch (data_input_clear) {
                    case "1":
                        if (!reg_number.test(myvalue) || myvalue.length > 20) {
                            this.$refs.tisp_number.classList.remove("correct");
                            this.$refs.mynumber.setAttribute('or', false);
                            this.mynumber = "您的格式不正确"
                        } else {
                            this.$refs.tisp_number.classList.add("correct");
                            this.$refs.mynumber.setAttribute('or', true);
                            this.mynumber = "输入正确"
                        }
                        break;
                    case "2":
                        if (this.checkPassword(myvalue)) {
                            this.pwd = "输入正确";
                            this.$refs.mypwd.setAttribute('or', true);
                            this.$refs.tisp_pwd.classList.add("correct");
                        } else {
                            this.$refs.mypwd.setAttribute('or', false);
                            this.$refs.tisp_pwd.classList.remove("correct");
                        }
                        var mynpwd = this.$refs.mynpwd.value;
                        if (mynpwd === myvalue) {
                            this.npwd = "输入正确";
                            this.$refs.mynpwd.setAttribute('or', true);
                            this.$refs.tisp_npwd.classList.add("correct");
                        } else {
                            this.npwd = "两者输入不相同";
                            this.$refs.mynpwd.setAttribute('or', false);
                            this.$refs.tisp_npwd.classList.remove("correct");
                        }
                        break;
                    case "3":
                        var mypwd = this.$refs.mypwd.value;
                        if (mypwd === myvalue) {
                            this.npwd = "输入正确";
                            this.$refs.mynpwd.setAttribute('or', true);
                            this.$refs.tisp_npwd.classList.add("correct");
                        } else {
                            this.npwd = "两者输入不相同";
                            this.$refs.mynpwd.setAttribute('or', false);
                            this.$refs.tisp_npwd.classList.remove("correct");
                        }
                        break;
                    case "4":
                        if (!reg_email.test(myvalue) || myvalue.length > 30) {
                            this.$refs.myemail.setAttribute('or', false);
                            this.$refs.tisp_email.classList.remove("correct");
                            this.myemail = "您的格式不正确"
                        } else {
                            this.$refs.myemail.setAttribute('or', true);
                            this.$refs.tisp_email.classList.add("correct");
                            this.myemail = "输入正确"
                        }
                        break;
                }
            },
            inblur: function (e) {
                e.currentTarget.nextElementSibling.classList.add('mui-hidden');
            },
            cles: function (e) {
                e.currentTarget.previousElementSibling.value = '';
            },
            checkPassword: function (str) {
                var reg1 = /[!@#$%^&*()_?<>{}]{1}/;
                var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/;
                var reg3 = /[a-zA-Z]+/;
                var reg4 = /[0-9]+/;
                if (reg1.test(str) && reg2.test(str) && reg3.test(str) && reg4.test(str)) {
                    if (str.length > 20) {
                        this.pwd = "您的密码过长";
                        return false;
                    } else {
                        return true;
                    }
                } else if (!reg1.test(str)) {
                    this.pwd = "需包含一个特殊字符";
                    return false;
                } else if (!reg2.test(str)) {
                    this.pwd = "长度在8-18位";
                    return false;
                } else if (!reg3.test(str)) {
                    this.pwd = "需含有字母";
                    return false;
                } else if (!reg4.test(str)) {
                    this.pwd = "需含有数字";
                    return false;
                }
            },
            register: function () {

                var cs1 = this.$refs.mynumber.getAttribute('or') === "false" ? eval(this.$refs.mynumber.getAttribute('or')) : true;
                var cs2 = this.$refs.mypwd.getAttribute('or') === "false" ? eval(this.$refs.mypwd.getAttribute('or')): true;
                var cs3 = this.$refs.mynpwd.getAttribute('or') === "false" ? eval(this.$refs.mynpwd.getAttribute('or')) : true;
                var cs4 = this.$refs.myemail.getAttribute('or') === "false" ?eval(this.$refs.myemail.getAttribute('or')) : true;

                if (cs1 && cs2 && cs3 && cs4) {
                    let values = {};
                    let num_value = this.$refs.mynumber.value;
                    let pwd_value = this.$refs.mypwd.value;
                    let npwd_value = this.$refs.mynpwd.value;
                    let email_value = this.$refs.myemail.value;
                    values = {
                        num_value:num_value,
                        pwd_value:pwd_value,
                        npwd_value:npwd_value,
                        email_value:email_value,
                    };
                    this.show = false;
                    var then = this;
                    this.$http.post('http://127.0.0.1:5000/register',values).then(result =>{
                        if(result.body.err_code===0){
                            //注册成功后的操作
                            this.$refs.shelter.style.display = "block";
                            setTimeout(()=>{
                                this.$refs.shelter.style.display = "none";
                                window.location.href = '/#/member/land';
                            },3000);
                        }else {
                            //注册不成功的操作
                            then.pop = result.body.message;
                            then.show = true;
                            setTimeout(() => {
                                then.show = false;
                            }, 2000);
                        }

                    })
                } else {
                    this.show = true;
                    setTimeout(() => {
                        this.show = false;
                    }, 2000);
                }
            }

        }
    }
</script>

<style scoped>
    .Shelter{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        text-align: center;
        display: none;
    }
    .Shelter p{
        color: #4cd964;
        margin-top: 80%;
    }
    .popup {
        width: 300px;
        text-align: center;
        margin: 20px auto;
        color: red;
        opacity: 1;
    }

    .correct {
        color: green !important;
    }

    .tisp {
        position: absolute;
        margin-right: 30px;
        right: 0;
        top: 10px;
        color: red;
        font-size: 14px;
    }

    label {
        font-weight: 200;
    }

    .mui-input-group:first-child {
        margin-top: 10px;
    }

    .mui-input-group label {
        width: 22%;
    }

    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
        top: 6px;
    }

    .mui-content-padded {
        margin-top: 25px;
    }

    .mui-btn {
        padding: 10px;
    }

    .mui-input-row label ~ input,
    .mui-input-row label ~ select,
    .mui-input-row label ~ textarea {
        width: 78%;
    }

    .mui-btn-blue, .mui-btn-primary, input[type=submit] {
        border: 1px solid rebeccapurple;
        background-color: rebeccapurple;
    }

    /*显示动画*/
    .pop-enter-active, .pop-leave-active {
        transition: opacity .5s ease-out;
    }

    .pop-enter, .pop-leave-to {
        opacity: 0;
    }
</style>