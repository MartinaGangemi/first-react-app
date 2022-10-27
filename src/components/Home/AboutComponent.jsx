import React from 'react';
import {Col, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const aboutItems = [
    {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci?',
        icon: <UserOutlined className="aboutIcons" />,
    },
    {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci?',
        icon: <UserOutlined className="aboutIcons" />,
    },
    {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci?',
        icon: <UserOutlined className="aboutIcons" />,
    },
];

const AboutComponent = () => {
    return (
        <div className=" container-fluid mt-4">
            <div className="aboutHolder">
                <h2 className="title">About us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi molestiae asperiores laborum tempore magnam quas!
                    Incidunt voluptatibus consequatur suscipit nisi modi
                    deserunt architecto, molestiae vel earum temporibus quam
                    rerum dignissimos aliquam autem ipsa sapiente porro, sit ad
                    corporis totam quidem! Nemo, hic exercitationem vitae minima
                    sapiente laudantium dolore deleniti omnis.
                </p>
                <Row className="row-about" gutter={[16, 16]}>
                    {aboutItems.map((item, i) => {
                        return (
                            <Col key={i} span={8}>
                                <div className="about-icon">{item.icon}</div>

                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default AboutComponent;
