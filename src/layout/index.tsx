import React from 'react';
import { Layout, Space } from 'antd';
import Head from "./Head";
import Lside from "./Lside";
import Container from "./Container";
import Foot from "./Foot";



const AppLayout: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>

        <Layout>

            <Head />
            <Layout>
                <Lside />
                <Container />
            </Layout>
           <Foot />
        </Layout>
    </Space>
);

export default AppLayout;