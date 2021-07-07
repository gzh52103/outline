
import GoodsList from '../views/goods/List.vue';
import AddGoods from '../views/goods/Add.vue';
import EditGoods from '../views/goods/Edit.vue';
import Home from '../views/Home.vue';
import Manage from '../views/Manage.vue';

// 需要登录才能访问的页面
export default [
    {
        path: '/manage',
        component:Manage,
        redirect: { name: 'Home' },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: 'goods',
                redirect: { name: 'GoodsList' },
                // 子路由
                children: [
                    // /goods/list
                    {
                        path: 'list',
                        name: 'GoodsList',
                        component: GoodsList
                    },
                    // /goods/add
                    {
                        path: 'add',
                        name: 'AddGoods',
                        component: AddGoods
                    },
                    {
                        path: 'edit',
                        name: 'EditGoods',
                        component: EditGoods
                    },
                ]
            },

            // {
            //     path: '/user',
            //     children: [

            //     ]
            // }
        ]
    }
]