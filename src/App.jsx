import {useState} from 'react';
import './App.css';
import './assets/css/style.scss';
import AppHeader from './components/Header';
import Hero from './components/Home/Hero';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const {Header, Content} = Layout;
function App() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Hero />
            </Content>
        </Layout>
    );
}

export default App;
