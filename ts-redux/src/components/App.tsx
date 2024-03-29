import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Layout, Menu, ConfigProvider } from 'antd'
import type { MenuProps } from 'antd'
import zh_CN from 'antd/locale/zh_CN'

import Employee from './employee'
import Setting from './setting'
import './App.css'

const { Header, Content, Footer } = Layout

const items: MenuProps['items'] = [
    {
        label: <Link to="/employee">员工管理</Link>,
        key: 'employee'
    },
    {
        label: <Link to="/setting">系统设置</Link>,
        key: 'setting'
    }
]

const App = () => {
    const defaultKey = useLocation().pathname?.replace('/', '') || 'employee'

    return (
        <ConfigProvider locale={zh_CN}>
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[defaultKey]}
                        className="menu"
                        items={items}
                    />
                </Header>
                <Content className="contentWrap">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Employee />} />
                            <Route path="/employee" element={<Employee />} />
                            <Route path="/setting" element={<Setting />} />
                        </Routes>
                    </div>
                </Content>
                <Footer className="footer">TypeScript in Action</Footer>
            </Layout>
        </ConfigProvider>
    )
}

export default App
