import React from 'react';
import request from '@/utils/request'
import { Table, Button, message } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import {withStorages} from '@/utils/hoc';

@withStorages('userInfo')
class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classList: [],
            page: 1,
            pageSize: 10,
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const { page, pageSize } = this.state;
        const { data } = await request.get('/class', {
            page,
            size: pageSize,
        });
        console.log('data', data);
        this.setState({
            classList: data
        })
    }
    editItem = (id) => {
        console.log('edit', id)
        this.props.history.push('/class/' + id);
    }
    removeItem = (id) => {
        console.log('remove', id)
        const {userInfo} = this.props;
        const { classList } = this.state;
        request.delete('/class/' + id,{

        },{
            headers: {
                Authorization: userInfo.authrization
            }
        }).then(data => {
            if (data.code === 204) {
                message.success('删除成功')
                this.setState({
                    classList:{
                        total:classList.total-1,
                        result:classList.result.filter(item => item._id !==id)
                    }
                })
            }
        })
    }
    onSelect = (selectedRowKeys, selectedRows) => {
        console.log('select', selectedRowKeys, selectedRows)
    }
    render() {
        const { classList } = this.state;
        const pagination = {
            total: classList.total,
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
                title: '班级名称',
                dataIndex: 'name',
                // render: (value,item,index) => {
                //     // value: dataIndex在数据中对应的值，如不指定dataIndex，则与item一致
                // },
            },
            {
                title: '学科',
                dataIndex: 'category',
                // render(value,item,index){
                //     console.log('age=',value)
                //  return value;
                // }
            },
            {
                title: '分校',
                dataIndex: 'city',
            },
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
                            <Button icon={<DeleteOutlined />} size="small" danger onClick={this.removeItem.bind(this, item._id)}>删除</Button>
                        </>
                        // </Button.Group>
                    )
                }
            }
        ]
        return (
            <div>
                班级列表
                <Table
                    rowKey="_id"
                    rowSelection={{
                        columnTitle: '#',
                        columnWidth: 20,
                        fixed: true,
                        onChange: this.onSelect
                    }}
                    columns={columns}
                    dataSource={classList.result}
                    pagination={pagination}
                />
            </div>
        )
    }
}

export default List