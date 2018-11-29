<template>
    <div style="position: relative">
        恭喜{{name_value}}登陆成功
        <div class="Shelter" ref="shelter"><p>对不起您还没有登陆，将在{{sj}}秒钟后跳转到登陆页</p></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name_value:"无名氏",
                sj:3
            }
        },
        created(){
            this.cs_cookie();
        },
        methods:{
            cs_cookie(){
                this.$http.get('/locookie').then(request=>{
                    //没有cookie跳转到登陆页
                    if(request.body.err_code===1){
                        clearInterval(clear_sj);
                        this.$refs.shelter.style.display = "block";
                        var clear_sj = setInterval(()=>{
                            this.sj -=1;
                        },1000);
                        setTimeout(()=>{
                            this.sj = 3;
                            this.$refs.shelter.style.display = "none";
                            window.location.href = '/#/member/land';
                        },3000);
                    }else {
                        this.name_value = request.body.name_value;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .Shelter{
        position: fixed;
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
</style>