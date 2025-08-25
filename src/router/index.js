/*
    路由
 */

import {createRouter,createWebHashHistory} from 'vue-router'
import {userStore} from "../store/index.js";


//登陆页面
const login = () => import('../views/loginPage/login.vue')
//主页
const basicLayouts = () =>import('../layouts/basicLayouts.vue')
//用户权限

const routes = [
    {path:'/',redirect: '/basicLayouts'},
    {path:'/login',name:'login',component:login,meta: { requiresAuth: false}},
    {path: '/basicLayouts',name:'basicLayouts',component:basicLayouts,meta: { requiresAuth: true }}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//路由前置守卫
router.beforeEach((to) => {
    const userAuthorization = userStore().authorization
    console.log("to.meta.requiresAuth",to.meta.requiresAuth)
    if (to.meta.requiresAuth) {
        console.log('userAuthorization',userAuthorization)
        if (!userAuthorization) {
            alert('未登陆！')
            return {
                name:'login',
            }
        }
    }

})


export default router