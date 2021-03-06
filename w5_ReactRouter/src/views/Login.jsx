import React from 'react';
import {Form,Input,Checkbox,Button} from 'antd'
import request from '@/utils/request';
import './login.scss';

function Login(props) {
    const onFinish = async function(values){
        console.log('onFinish=',values);
        const data = await request.post('/login',values);
        console.log('data',data);

        if(data.code === 200){
            localStorage.setItem('userInfo',JSON.stringify(data.data))
            props.history.push('/home');
        }
    }
    const rules = {
        username:[
            { required: true, message: '请输入用户名' }
        ],
        password:[
            { required: true, message: '请输入密码' }
        ]
    }
    return (
        <div className="login-page">
            <h1>登录H5后台管理系统</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ mdl: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="mdl" valuePropName="checked" wrapperCol={{ offset: 8, span: 12 }}>
                    <Checkbox>免登录</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login