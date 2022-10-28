import React from 'react';
import {Button, Form, Input, Row, Col} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const ContactPage = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div className="container-fluid mt-4 contact-section">
            <h2 className="title">Contact us</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                iste animi et sequi eaque, exercitationem necessitatibus
                laboriosam cum, voluptas fugit odit officiis ut, corporis eius
                similique itaque impedit! Libero quia, asperiores consequuntur
                non alias numquam itaque, eligendi molestias quis qui expedita
                iusto vel id! Sequi quod consequatur et dolore quidem.
            </p>

            <Form
                className="mt-4"
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Form.Item
                            name={['user', 'name']}
                            rules={[{required: true}]}>
                            <Input placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={['user', 'email']}
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name={['user', 'message']}>
                            <Input.TextArea placeholder="Message" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ContactPage;
