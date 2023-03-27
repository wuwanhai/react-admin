import {Dropdown, Layout, message} from "antd";
import { GithubOutlined,FundOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import type { MenuProps } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'blue',
    height: 80,
    fontSize:'38px',
    paddingInline: 50,
    lineHeight: '64px',
    marginBottom:'1%',
    backgroundColor: 'white',
};

const headerContainer: React.CSSProperties = {
    display:"flex",
    justifyContent:'space-between',
    alignItems:'center'
};
const headerContainerLogo: React.CSSProperties = {

};
const headerStyleLogin: React.CSSProperties = {

};

const handleMenuClick: MenuProps['onClick'] = (e) => {
    // message.info('Click on menu item.').then(r => );
    console.log('click', e);
};

const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

const Head = () => {
    return (<>
        <Header style={headerStyle}>
            <div style={headerContainer}>
                <div style={headerContainerLogo}>
                    <FundOutlined />
                </div>
                <div style={headerStyleLogin}>
                    <Dropdown.Button menu={menuProps} placement="bottom" icon={<GithubOutlined />}>
                        Admin
                    </Dropdown.Button>
                </div>
            </div>
        </Header>
    </>)
}

export default Head