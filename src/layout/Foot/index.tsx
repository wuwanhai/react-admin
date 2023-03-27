import React from "react";
import {Layout} from "antd";
const { Footer} = Layout;

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height:120,
    backgroundColor: '#7dbcea',
};
const Foot = () => {
    return (<>
        <Footer style={footerStyle}>Footer</Footer>
    </>)
}

export default Foot