import {Layout} from "antd";
import React from "react";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    height: 700,
    color: '#fff',
    backgroundColor: '#108ee9',
};

const Container = () => {
    return (<>
        <Content style={contentStyle}>主要</Content>
    </>)
}

export default Container