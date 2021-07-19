import React from 'react';
import request from '@/utils/request'
import { Table,Button } from 'antd'

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classList: [],
            page:1,
            pageSize:10,
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const {page,pageSize} = this.state;
        const { data } = await request.get('/class',{
            page,
            size:pageSize
        });
        console.log('data', data);
        this.setState({
            classList: data
        })
    }
    editItem = (id)=>{
        console.log('edit',id)
    }
    removeItem = (id)=>{
        console.log('remove',id)
    }
    onSelect = (selectedRowKeys, selectedRows)=>{
        console.log('select',selectedRowKeys, selectedRows)
    }
    render() {
        const { classList } = this.state;
        const columns = [
            {},

            {
                title: '班级名称',
                dataIndex: 'name',
                // render: (value,item,index) => {
                //     // value: dataIndex在数据中对应的值，如不指定dataIndex，则与item一致
                // },
            },
            {
                title: '学科',
                dataIndex:'category',
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
                title:"操作",
                key:'action',
                render:(item)=>{
                    return <div>
                        <Button type="primary" size="small" ghost onClick={this.editItem.bind(this,item._id)}>编辑</Button>
                        <Button size="small" danger onClick={this.removeItem.bind(this,item._id)}>删除</Button>
                    </div>
                }
            }
        ]
        return (
            <div>
                班级列表
                <Table
                    rowKey="_id"
                    rowSelection={{
                        columnTitle:'#',
                        columnWidth:20,
                        fixed:true,
                        onChange:this.onSelect
                    }}
                    columns={columns}
                    dataSource={classList.result}
                    pagination={{
                        total:classList.total,
                        onChange:(page, pageSize)=>{
                            // setState为异步操作
                            this.setState({
                                page,
                                pageSize
                            },()=>{
                                this.getData()

                            })
                        }
                    }}
                />
            </div>
        )
    }
}

export default List