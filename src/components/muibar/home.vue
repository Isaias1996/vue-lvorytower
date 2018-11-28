<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/xinwenzixun.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/tpfx.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/spgm.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/lyfk.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/spzq.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="http://127.0.0.1:5000/public/images/lxwm.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            &:nth-child(1) {
                background: url("http://127.0.0.1:5000/public/images/lb1.jpg") no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2) {
                background: url("http://127.0.0.1:5000/public/images/lb2.png") no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3) {
                background: url("http://127.0.0.1:5000/public/images/lb3.jpg") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .mui-content {
        .mui-table-view:first-child{
            margin-top: 0;
        }
        .mui-grid-9{
            background-color: white;
            border: 0;
            .mui-table-view-cell{
                border: 0;
            }
            img{
                width: 40px;
                height: 40px;
                background-size: 100%;
            }
            .mui-media-body{
                font-size: 13px;
            }
        }
    }
</style>