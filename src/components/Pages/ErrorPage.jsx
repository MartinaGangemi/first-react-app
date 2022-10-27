import React from 'react';
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Page not found!</h2>
            <Button type="primary" onClick={() => navigate('/')}>
                Torna alla home
            </Button>
        </>
    );
};

export default ErrorPage;
