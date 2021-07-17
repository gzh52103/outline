import React from 'react';
import { HashRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import { Menu, Layout, Breadcrumb, Row, Col, Button, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SlackOutlined,HomeOutlined,SolutionOutlined,TeamOutlined,OneToOneOutlined, } from '@ant-design/icons'

import Home from './views/Home'
import Login from './views/Login'
import Class from './views/Class'
import Student from './views/Student'

import { withUser } from './utils/hoc'

import 'antd/dist/antd.css'


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

@withRouter
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [{
                path: '/home',
                text: '首页',
                icon:<HomeOutlined />
            }, {
                path: '/class',
                text: '班级管理',
                icon:<SolutionOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '班级列表'
                    },
                    {
                        path: '/add',
                        text: '添加班级'
                    },
                ]
            }, {
                path: '/student',
                text: '学生管理',
                icon:<TeamOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '学生列表'
                    },
                    {
                        path: '/add',
                        text: '添加学生'
                    },
                ]
            }, {
                path: '/category',
                text: '学科管理',
                icon:<NotificationOutlined/>,
                children: [
                    {
                        path: '/list',
                        text: '学科列表'
                    },
                    {
                        path: '/add',
                        text: '添加学科'
                    },
                ]
            }, {
                path: '/city',
                text: '分校管理',
                icon:<OneToOneOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '分校列表'
                    },
                    {
                        path: '/add',
                        text: '添加分校'
                    },
                ]
            }]
        }

        this.goto = this.goto.bind(this);
    }

    goto(path) {
        console.log('goto=', path);
        this.props.history.push(path)
    }

    changeMenu = ({ item, key, keyPath, domEvent })=>{
        console.log('changeMenu=',item, key, keyPath)
        this.props.history.push(key);
    }

    render() {

        console.log('App.render.props', this.props);
        const { menu } = this.state;
        return (
            <Layout>
                <Header className="header" style={{ padding: '0 20px', color: '#fff' }}>
                    <Row>
                        <Col span={4}>
                            <div className="logo">
                                <SlackOutlined style={{ color: '#58bc58', fontSize: 30, verticalAlign: 'middle' }} /> H5班级管理系统
                            </div>
                        </Col>
                        <Col span={17}>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={3} style={{ textAlign: 'right' }}>
                            <Avatar size="small" icon={<UserOutlined />} />
                            <Button type="link">退出</Button>
                        </Col>
                    </Row>


                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['/class']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.changeMenu}
                        >
                            {
                                menu.map(item => (
                                    <SubMenu key={item.path} icon={item.icon} title={item.text}>
                                        {
                                            item.children && item.children.map(it => {
                                                return <Menu.Item key={item.path + it.path}>{it.text}</Menu.Item>
                                            })
                                        }

                                    </SubMenu>
                                ))
                            }

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                {/* /home -> Home */}
                                <Route path="/home" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/class" component={Class} />
                                <Route path="/student">
                                    <Student />
                                </Route>
                                <Route path="/notfound" component={() => <div>404</div>} />
                                <Redirect from="/" to="/login" exact />
                                <Redirect from="*" to="/notfound" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

// App = withUser(App);
// App = withRouter(App)

export default App;