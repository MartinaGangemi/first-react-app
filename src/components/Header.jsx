import Nav from './Nav';
const navElements = [
    {
        id: 1,
        linkName: 'link1',
        href: '#',
    },
    {
        id: 2,
        linkName: 'link2',
        href: '#',
    },
    {
        id: 3,
        linkName: 'link3',
        href: '#',
    },
    {
        id: 4,
        linkName: 'link4',
        href: '#',
    },
];
const Header = (props) => {
    return (
        <nav>
            {navElements.map((link) => (
                <Nav key={link.id} {...link} />
            ))}

            <h1>{props.saluta}</h1>
            <div>ciao</div>
        </nav>
    );
};
export default Header;
