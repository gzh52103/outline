import React from 'react';
import { Select, Form, Input, Button, message } from 'antd'
import request from '@/utils/request';
import { withStorages } from '../../utils/hoc'
import qs from 'querystring'
console.log('qs',qs)

@withStorages('userInfo')
class Add extends React.Component {
    state = {
        userData: {}, // 班级信息
        classData: {},
        name: '',
        cities: [],
        classlist: []
    }
    onFinish = async (values) => {
        const { userData } = this.state;
        const { userInfo } = this.props;
        console.log('onFinish=', values);
        const data = await request.put('/user/' + userData._id, values, {
            headers: {
                Authorization: userInfo.authrization
            }
        });

        if (data.code === 201) {
            message.success('修改成功')
            this.props.history.push('/student/list');
        }
    }

    componentDidMount() {
        const { params } = this.props.match
        // 获取学科
        request.get('/class', { total: false, size: 100 }).then(data => {
            this.setState({
                classlist: data.data
            })
        })
        // 获取分校
        request.get('/city', { total: false, size: 100 }).then(data => {
            this.setState({
                cities: data.data
            })
        })

        // 获取当前班级信息
        request.get('/user/' + params.id).then(data => {
            this.setState({
                userData: data.data
            });

            // 根据班级id获取用户班级信息
            request.get('/class/' + data.data.class_id).then(data => {
                this.setState({
                    classData: data.data || {}
                })
            })
        })
    }
    render() {
        console.log('Eidt.props', this.props);
        console.log('format=',qs.parse(this.props.location.search.slice(1)))
        const { cities, classlist, userData, classData } = this.state;
        const rules = {
            username: [
                { required: true, message: '请输入用户名' }
            ],
        }
        return (
            <div className="add-page">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    onFinish={this.onFinish}
                    fields={[
                        { name: 'username', value: userData.username },
                        { name: 'class_id', value: classData.name },
                    ]}
                >
                    <Form.Item
                        label="学生姓名"
                        name="username"
                        rules={rules.username}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="所在班级"
                        name="class_id"
                    >
                        <Select style={{ width: 120 }}>
                            {
                                classlist.map(item => (
                                    <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
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