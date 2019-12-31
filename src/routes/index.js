import loadableHandler from '../common/lazyLoad'
// 路由早懒加载
const routes = [
    // revealText 动画
    // {
    //     path: '/',
    //     component: loadableHandler(() => import('../views/animation/revealText'))
    //     // 嵌套路由
    // },
    {
        path: '/revealText',
        component: loadableHandler(() => import('../views/animation/revealText'))
    },
    // 阶梯式的loading
    {
        path: '/staggerStairLoading',
        component: loadableHandler(() => import('../views/animation/staggerStairLoading'))
    },
    // staggerSquareLoading
    {
        path: '/staggerSquareLoading',
        component: loadableHandler(() => import('../views/animation/staggerSquareLoading'))
    },
    {
        path: '/gleamingLoading',
        component: loadableHandler(() => import('../views/animation/gleamingLoading'))
    },
    {
        path: '/gleamingHeading',
        component: loadableHandler(() => import('../views/animation/gleamingHeading'))
    },
    {
        path: '/staggeredShrinkingLoading',
        component: loadableHandler(() => import('../views/animation/staggeredShrinkingLoading'))
    },
    {
        path: '/error',
        component: loadableHandler(() => import('../views/error/index'))
    }
]
export default routes