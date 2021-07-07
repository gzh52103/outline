<template>
    <el-container>
        <el-header>XXX管理系统</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    class="el-menu-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item
                        index="3"
                        disabled
                    >消息中心</el-menu-item>
                    <el-menu-item index="4"><a
                            href="https://www.ele.me"
                            target="_blank"
                        >订单管理</a></el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>

            </el-main>
            <router-view />
        </el-container>
    </el-container>
</template>
<script>
import Vue from "vue";
import {
  Container,
  Main,
  Aside,
  Header,
  Menu,
  MenuItem,
  Submenu
} from "element-ui";
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
export default {};
</script>
