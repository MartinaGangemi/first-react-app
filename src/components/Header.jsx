import React from 'react';
import {Menu, Input} from 'antd';
import logo from '../assets/img/react.svg';
import {SearchOutlined} from '@ant-design/icons';

const navLink = [
    {
        linkName: 'Home',
        href: '#',
    },
    {
        linkName: 'nav2',
        href: '#',
    },
    {
        linkName: 'nav3',
        href: '#',
    },
];
const AppHeader = () => {
    return (
        <div className="container-fluid">
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
                            label: <a href={link.href}>{link.linkName}</a>,
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
