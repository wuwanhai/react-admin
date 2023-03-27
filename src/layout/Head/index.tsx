import {Layout} from "antd";
import React from "react";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 104,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const Head = () => {
    return (<>
       <Header style={headerStyle}/>
    </>)
}

export default Head