import Vue from 'vue';
import VueRouter from 'vue-router';

//主路由
import Home from './components/muibar/home.vue';
import Member from './components/muibar/member.vue';
import Search from './components/muibar/search.vue';
import Shopcar from './components/muibar/shopcar.vue';

//登陆页路由
import land from './components/member/land.vue';
import reg from './components/member/reg.vue';
import success from './components/member/success.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        //重定向
        {path:'/',redirect:'/home'},
        {path:'/member',redirect:'/member/land'},
        //主页切换路由
        {path:'/home',component:Home},
        {path:'/member',component:Member,
            children:[
                {path:'land',component:land},
                {path:'reg',component:reg},
                {path:'success',component:success}
            ]
        },
        {path:'/search',component:Search},
        {path:'/shopcar',component:Shopcar},
    ],
    linkActiveClass:'mui-active'
});

export default router