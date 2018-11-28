<template>
    <div class="app-container">
        <!--顶部header-->
        <mt-header fixed title="lvorytower"></mt-header>
        <!--中间路由-->
        <transition name="app">
            <router-view></router-view>
        </transition>
        <!--底部Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .app-container{
        padding-top: 40px;
        header{
            background: rebeccapurple;
        }
        nav{
            .mui-active{
                color: rebeccapurple;
            }
        }
        .mui-bar{
            box-shadow:0 0 1px rebeccapurple
        }
    }
    //切换动画
    .app-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .app-leave-to{
        opacity: 0;
        position: absolute;
        transform: translateX(-100%);
    }
    .app-enter-active,.app-leave-active{
        transition: all 0.5s ease;
    }
</style>