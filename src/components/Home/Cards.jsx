import React from 'react';

import {Card, Col, Row} from 'antd';
const {Meta} = Card;

const cardLists = [
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
    {
        cardImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur animi aspernatur quas dignissimos ipsam dolor molestias! Sed, ut odio.',
    },
];

const Cards = () => {
    return (
        <div className="cardContainer container-fluid">
            <h2 className="title">Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi molestiae asperiores laborum tempore magnam quas!
                Incidunt voluptatibus consequatur suscipit nisi modi deserunt
                architecto, molestiae vel earum temporibus quam rerum
                dignissimos aliquam autem ipsa sapiente porro, sit ad corporis
                totam quidem! Nemo, hic exercitationem vitae minima sapiente
                laudantium dolore deleniti omnis.
            </p>

            <Row gutter={[24, 24]} className="mt-4">
                {cardLists.map((card, i) => {
                    return (
                        <Col key={i} span={8}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="" src={card.cardImg} />}>
                                <Meta
                                    title={card.title}
                                    description={card.text}
                                />
                            </Card>
                        </Col>
                    );
                })}
                ;
            </Row>
        </div>
    );
};

export default Cards;
