import {useState} from 'react';

import './assets/css/style.scss';
import './assets/css/utilities.scss';
import AppHeader from './components/Header';
import HomePage from './components/Pages/HomePage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import FooterComponent from './components/FooterComponent';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const {Header, Footer} = Layout;
function App() {
    return (
        <Layout className="mainLayout">
            <Router>
                <Header>
                    <AppHeader />
                </Header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>

            <Footer
                style={{
                    textAlign: 'center',
                }}>
                <FooterComponent />
            </Footer>
        </Layout>
    );
}

export default App;
