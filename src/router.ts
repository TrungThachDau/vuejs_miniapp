import {createRouter, createWebHistory} from 'vue-router'
import SignInView from "./views/SignInView.vue";
import UserListView from "./views/UserListView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import AddUser from "./views/AddUser.vue";


const routes = [
    {
        path:'/',
        component: SignInView
    },
    {
        path:'/users',
        component: UserListView
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundView
    },
    {
        path:'/add-user',
        component: AddUser
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router