import React from 'react';

const Nav = (props) => {
    console.log(props);
    const {id, linkName, href} = props;
    return (
        <>
            <ul>
                <li>
                    <a href={href}>{linkName}</a>
                </li>
            </ul>
        </>
    );
};

export default Nav;
