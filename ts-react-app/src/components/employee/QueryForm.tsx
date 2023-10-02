import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import type { FormProps } from 'antd';

import { get } from '../../utils/request';
import { GET_EMPLOYEE_URL } from '../../constants/urls';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';

const { Option } = Select;

interface Props extends FormProps {
    onDataChange(data: EmployeeResponse): void
}

// Hooks version
const QueryFormHooks = (props: Props) => {
    const [name, setName] = useState('');
    const [departmentId, setDepartmentId] = useState<number | undefined>();

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleDepartmentChange = (value: number) => {
        setDepartmentId(value)
    }

    const handleSubmit = () => {
        queryEmployee({name, departmentId});
    }

    const queryEmployee = async (param: EmployeeRequest) => {
        const res = await get(GET_EMPLOYEE_URL, param)
        props.onDataChange(res.data)
    }

    /**
     * 开发环境下，使用 StrictMode 会让 Effect 执行两次，其目的是让开发者发现隐藏的逻辑错误。
     * 生产环境下无此问题，所以无需修改
     * https://zh-hans.react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development
     * 
     * 页面初始化，查询数据
     */
    useEffect(() => {
        queryEmployee({name, departmentId});
    }, [])

    return (
        <>
            <Form layout="inline">
                <Form.Item>
                    <Input
                        placeholder="姓名"
                        style={{ width: 120 }}
                        allowClear
                        value={name}
                        onChange={handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                <Select
                    placeholder="部门"
                    style={{ width: 120 }}
                    allowClear
                    value={departmentId}
                    onChange={handleDepartmentChange}
                >
                    <Option value={1}>技术部</Option>
                    <Option value={2}>产品部</Option>
                    <Option value={3}>市场部</Option>
                    <Option value={4}>运营部</Option>
                </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>查询</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default QueryFormHooks

// class QueryForm extends React.Component<Props, EmployeeRequest> {
//     state: EmployeeRequest = {
//         name: '',
//         departmentId: undefined
//     }
//     handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
//         this.setState({
//             name: e.currentTarget.value
//         });
//     }
//     handleDepartmentChange = (value: number) => {
//         this.setState({
//             departmentId: value
//         });
//     }
//     handleSubmit = () => {
//         this.queryEmployee(this.state);
//     }
//     componentDidMount() {
//         this.queryEmployee(this.state);
//     }
//     queryEmployee(param: EmployeeRequest) {
//         get(GET_EMPLOYEE_URL, param).then(res => {
//             this.props.onDataChange(res.data);
//         });
//     }
//     render() {
//         return (
//             <Form layout="inline">
//                 <Form.Item>
//                     <Input
//                         placeholder="姓名"
//                         style={{ width: 120 }}
//                         allowClear
//                         value={this.state.name}
//                         onChange={this.handleNameChange}
//                     />
//                 </Form.Item>
//                 <Form.Item>
//                 <Select
//                     placeholder="部门"
//                     style={{ width: 120 }}
//                     allowClear
//                     value={this.state.departmentId}
//                     onChange={this.handleDepartmentChange}
//                 >
//                     <Option value={1}>技术部</Option>
//                     <Option value={2}>产品部</Option>
//                     <Option value={3}>市场部</Option>
//                     <Option value={4}>运营部</Option>
//                 </Select>
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" onClick={this.handleSubmit}>查询</Button>
//                 </Form.Item>
//             </Form>
//         )
//     }
// }
// export default QueryForm

// v3 的用法，已弃用
// const WrapQueryForm = Form.create<Props>({
//     name: 'employee_query'
// })(QueryForm);

// export default WrapQueryForm;

