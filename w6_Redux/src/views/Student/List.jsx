import React from 'react';
import request from '@/utils/request'
import { Table, Button,Popconfirm,Row,Col, message } from 'antd'
import { DeleteOutlined, EditOutlined,PlusOutlined, } from '@ant-design/icons'
import { withStorages } from '@/utils/hoc';
import moment from 'moment'
import qs from 'querystring'

@withStorages('userInfo')
class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classlist: [],
            datalist: [],
            page: 1,
            pageSize: 10,
            selectedRowKeys:[], // 已选择的行对应的id
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const { page, pageSize } = this.state;
        const { data } = await request.get('/user', {
            page,
            size: pageSize,
        });
        console.log('data', data);
        this.setState({
            datalist: data
        })
    }
    getClass = async () => {
        const { page, pageSize } = this.state;
        const { data } = await request.get('/class', {
            page,
            size: pageSize,
            size: 100,
            total: false
        });
        console.log('data', data);
        this.setState({
            classlist: data
        })
    }
    filterClass(id) {
        const { classlist } = this.state;
        const current = classlist.find(item => item._id === id);
        return current
    }

    editItem = (id) => {
        console.log('edit', id)
        const data = {username:'laoxie',password:123}
        this.props.history.push({
            pathname:'/student/' + id,
            search:qs.stringify(data)
        });
    }
    removeItem = (id) => {
        console.log('remove', id)
        const { userInfo } = this.props;
        const { datalist } = this.state;
        request.delete('/user/' + id, {

        }, {
            headers: {
                Authorization: userInfo.authrization
            }
        }).then(data => {
            if (data.code === 204) {
                message.success('删除成功')
                this.setState({
                    datalist: {
                        total: datalist.total - 1,
                        result: datalist.result.filter(item => item._id !== id)
                    }
                })
            }
        })
    }
    removeMany = async ()=>{
        const {selectedRowKeys} = this.state;
        if(selectedRowKeys.length === 0){
            message.warn('请选择删除的数据');
            return;
        }
        const data = await request.delete('/user',{
            ids:selectedRowKeys
        })
        if(data.code === 204){
            message.success('批量删除成功');
            this.setState({
                datalist: {
                    total: datalist.total - selectedRowKeys.length,
                    result: datalist.result.filter(item => !selectedRowKeys.find(item._id))
                }
            })
        }
    }
    onSelect = (selectedRowKeys, selectedRows) => {
        console.log('select', selectedRowKeys, selectedRows)
        this.setState({
            selectedRowKeys
        })
    }
    render() {
        const { datalist } = this.state;
        const pagination = {
            total: datalist.total,
            showTotal: (total) => `共${total}条数据`,
            size: 'small',
            onChange: (page, pageSize) => {
                // setState为异步操作
                this.setState({
                    page,
                    pageSize
                }, () => {
                    this.getData()

                })
            }
        }
        const columns = [
            {
                title: '学生姓名',
                dataIndex: 'username',
                render: (value,item,index) => {
                    const current = this.filterClass(item.class_id)
                    return <>
                        <h4>{value}</h4>
                        <p>{current ? `@`+current : ''}</p>
                        <p>注册时间: {moment(item.regtime).format('YYYY/MM/DD hh:mm:ss')}</p>
                    </>
                },
            },
            // {
            //     title: '班级',
            //     dataIndex: 'class_id',
            //     render: (class_id, item, index) => {
            //         const current = this.filterClass(class_id)
            //         return current ? current.name : '';
            //     }
            // },
            // {
            //     title: '注册时间',
            //     dataIndex: 'regtime',
            //     render:(regtime)=>{
            //         return moment(regtime).format('YYYY/MM/DD hh:mm:ss');
            //     }
            // },
            {
                title: "操作",
                key: 'action',
                width: 180,
                render: (item) => {
                    return (
                        // <Button.Group>
                        <>
                            <Button
                                type="primary"
                                size="small"
                                ghost
                                onClick={this.editItem.bind(this, item._id)}
                                icon={<EditOutlined />}
                                style={{ marginRight: 5 }}
                            >编辑</Button>
                            <Popconfirm title="确认删除" onConfirm={this.removeItem.bind(this, item._id)}>
                                <Button icon={<DeleteOutlined />} size="small" danger>删除</Button>
                            </Popconfirm>
                        </>
                        // </Button.Group>
                    )
                }
            }
        ]
        return (
            <div>
                <Row gutter={10}>
                    <Col span={12}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={()=>{
                            this.props.history.push('/student/add')
                        }}>添加</Button>
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}><Button type="primary" danger icon={<DeleteOutlined />} onClick={this.removeMany}>批量删除</Button></Col>
                </Row>
                <Table
                    rowKey="_id"
                    rowSelection={{
                        columnTitle: '#',
                        columnWidth: 20,
                        fixed: true,
                        onChange: this.onSelect
                    }}
                    columns={columns}
                    dataSource={datalist.result}
                    pagination={pagination}
                />
            </div>
        )
    }
}

export default List