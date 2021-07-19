import React from 'react';
import { Select, Form, Input, Button, message } from 'antd'
import request from '@/utils/request';
import { withStorages } from '../../utils/hoc'

@withStorages('userInfo')
class Add extends React.Component {
    state = {
        classData:{}, // 班级信息
        name: '',
        cities: [],
        categories: []
    }
    onFinish = async (values) => {
        const {classData} = this.state;
        const { userInfo } = this.props;
        console.log('onFinish=', values);
        const data = await request.put('/class/'+classData._id, values, {
            headers: {
                Authorization: userInfo.authrization
            }
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
        const {params} = this.props.match
        // 获取学科
        request.get('/category', { total: false, size: 100 }).then(data => {
            this.setState({
                categories: data.data
            })
        })
        // 获取分校
        request.get('/city', { total: false, size: 100 }).then(data => {
            this.setState({
                cities: data.data
            })
        })

        // 获取当前班级信息
        request.get('/class/'+params.id).then(data=>{
            this.setState({
                classData:data.data
            })
        })
    }
    render() {
        console.log('Eidt.props',this.props);
        const { cities, categories,classData} = this.state;
        console.log('classData',classData)
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
                    // initialValues={{
                    //     name:classData.name || '',
                    //     category: classData.category || 'HTML5',
                    //     city: classData.city || '广州'
                    // }}
                    onFinish={this.onFinish}
                    fields={[
                        {name:'name',value:classData.name},
                        {name:'category',value:classData.category},
                        {name:'city',value:classData.city},
                    ]}
                >
                    <Form.Item
                        label="班级名称"
                        name="name"
                        rules={rules.name}
                        initialValue={classData.name}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="学科"
                        name="category"
                        initialValue={classData.category}
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
                        initialValue={classData.city}
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