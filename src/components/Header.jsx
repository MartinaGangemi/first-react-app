import React from 'react';
import {Menu, Input} from 'antd';
import logo from '../assets/img/react.svg';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const navLink = [
    {
        linkName: 'Home',
        href: '/',
    },
    {
        linkName: 'Contact us',
        href: '/contact',
    },
    {
        linkName: 'nav3',
        href: '#',
    },
];
const AppHeader = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <Menu
                    className="nav"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={navLink.map((link, i) => {
                        const key = i + 1;
                        return {
                            key,
                            label: <Link to={link.href}>{link.linkName}</Link>,
                        };
                    })}
                />

                <Input
                    className="inputNav"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                />
            </div>
        </div>
    );
};

export default AppHeader;
