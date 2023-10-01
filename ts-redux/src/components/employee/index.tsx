import { useState } from 'react'
import { Table, Button } from 'antd'
import { PlusCircleOutlined, DownloadOutlined } from '@ant-design/icons'
import './index.css'

import {
    useAppSelector,
    useAppDispatch
} from '../../redux/hooks'

import QueryForm from './QueryForm'
import InfoModal from './InfoModal'
import getColunms from './colums'

import { DOWNLOAD_EMPLOYEE_URL } from '../../constants/urls'
import {
    EmployeeInfo,
    DeleteRequest,
} from '../../interface/employee'
import {
    getEmployeeAsync,
    createEmployeeAsync,
    deleteEmployeeAsync,
    updateEmployeeAsync,
    selectEmployeeList
} from '../../redux/employee'

export default function Employee() {
    const employeeList = useAppSelector(selectEmployeeList)
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [edit, setEdit] = useState(false)
    const [rowData, setRowData] = useState<Partial<EmployeeInfo>>({})

    const hideModal = () => {
        setShowModal(false)
        setRowData({})
    }
    const handleCreate = () => {
        setShowModal(true)
        setEdit(false)
        setRowData({})
    }
    const handleUpdate = (record: EmployeeInfo) => {
        setShowModal(true)
        setEdit(true)
        setRowData(record)
    }
    const handleDelete = (param: DeleteRequest) => dispatch(deleteEmployeeAsync(param))
    const handleDownload = () => window.open(DOWNLOAD_EMPLOYEE_URL)

    return (
        <>
            <QueryForm
                getData={(param) => dispatch(getEmployeeAsync(param))}
                setLoading={setLoading}
            />
            <div className="toolbar">
                <Button type="primary" icon={<PlusCircleOutlined/>} onClick={handleCreate}>
                    添加新员工
                </Button>
                <Button
                    type="primary"
                    icon={<DownloadOutlined/>}
                    onClick={handleDownload}
                    className="right"
                >
                    导出
                </Button>
            </div>
            <InfoModal
                visible={showModal}
                edit={edit}
                rowData={rowData}
                hide={hideModal}
                createData={(param) => dispatch(createEmployeeAsync(param))}
                updateData={(param) => dispatch(updateEmployeeAsync(param))}
            />
            <Table
                columns={getColunms(handleUpdate, handleDelete)}
                dataSource={employeeList}
                loading={loading}
                className="table"
                pagination={false}
            />
        </>
    )
}
