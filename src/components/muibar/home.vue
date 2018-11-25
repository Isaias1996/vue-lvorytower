<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
        <h3>我是Home</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        created(){
            
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background: url("http://127.0.0.1:5000/public/images/lb1.jpg") no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2){
                background: url("http://127.0.0.1:5000/public/images/lb2.png") no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3){
                background: url("http://127.0.0.1:5000/public/images/lb3.jpg") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
</style>