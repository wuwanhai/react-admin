import React from "react";
import {Layout} from "antd";
const { Sider} = Layout;

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    height:700,
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const Lside = () => {
    return (<>
        <Sider style={siderStyle}></Sider>
    </>)
}

export default Lside