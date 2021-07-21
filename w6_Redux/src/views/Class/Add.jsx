import React from 'react';
import { Select, Form, Input, Button, message } from 'antd'
import request from '@/utils/request';
import {connect} from 'react-redux'
import { withStorages } from '../../utils/hoc'

// @withStorages('userInfo')
const mapStateToProps = state=>({
    userInfo:state.userInfo
})
@connect(mapStateToProps)
class Add extends React.Component {
    state = {
        name: '',
        cities: [],
        categories: []
    }
    onFinish = async (values) => {
        const { userInfo } = this.props;
        console.log('onFinish=', values);
        const data = await request.post('/class', values, {
            // headers: {
            //     Authorization: userInfo.authrization
            // }
        });
        console.log('data', data);

        if (data.code === 201) {
            message.success('添加成功')
            this.props.history.push('/class/list');
        }
    }
    changeCategory = () => {

    }
    changeCity = () => {

    }
    componentDidMount() {
        request.get('/category', { total: false, size: 100 }).then(data => {
            this.setState({
                categories: data.data
            })
        })
        request.get('/city', { total: false, size: 100 }).then(data => {
            this.setState({
                cities: data.data
            })
        })
    }
    render() {
        const { cities, categories } = this.state;
        const rules = {
            name: [
                { required: true, message: '请输入用户名' }
            ],
        }
        return (
            <div className="add-page">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    initialValues={{
                        category: 'HTML5',
                        city: '广州'
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="班级名称"
                        name="name"
                        rules={rules.name}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="学科"
                        name="category"
                        rules={rules.category}
                    >
                        <Select style={{ width: 120 }} onChange={this.changeCategory}>
                            {
                                categories.map(item => (
                                    <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="分校"
                        name="city"
                        rules={rules.city}
                    >
                        <Select style={{ width: 120 }} onChange={this.changeCity}>{
                            cities.map(item => (

                                <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>
                            ))
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                        <Button type="primary" htmlType="submit">
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Add