import {Layout} from "antd";
import React from "react";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    height: 720,
    padding: '2%',
    margin:'1%',
    color: 'black',
    backgroundColor: 'white',
};

const Container = () => {
    return (<>
        <Content style={contentStyle}>主要</Content>
    </>)
}

export default Container