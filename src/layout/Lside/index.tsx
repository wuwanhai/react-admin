import React from "react";
import {Layout} from "antd";
const { Sider} = Layout;

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('商品', 'sub1', <MailOutlined />, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('订单', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
    ]),
];

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    height:720,
    color: '#fff',
    marginRight:'1%',
    width: '500px'
    // backgroundColor: '#3ba0e9',
};
const Lside = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (
        <>
        <Sider style={siderStyle}>
            <Menu
                onClick={onClick}
                style={{ width: 200,height: 720 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Sider>
    </>)
}

export default Lside