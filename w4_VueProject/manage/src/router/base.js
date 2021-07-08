import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
export default [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    component: Login
},
{
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
},
{
    path: '*',
    redirect: '/login'
}
]