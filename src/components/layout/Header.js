import React from 'react';
import Logo from '../common/Logo';
import Nav from '../common/Nav';

class Header extends React.Component {
    render() {
        const menuItems = [
            {text: 'Home', url: '/home'},
            {text: 'About', url: '/about'},
            {text: 'Contact', url: '/contact'},
        ]

        return (
            <header style={styles.header}>
                <Logo />
                <Nav items={menuItems} />
            </header>
        )
    }
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#55efc4',
        borderRadius: '12px',
    }
}

export default Header;