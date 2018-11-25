import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/muibar/home.vue';
import Member from './components/muibar/member.vue';
import Search from './components/muibar/search.vue';
import Shopcar from './components/muibar/shopcar.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/search',component:Search},
        {path:'/shopcar',component:Shopcar},
    ],
    linkActiveClass:'mui-active'
});

export default router