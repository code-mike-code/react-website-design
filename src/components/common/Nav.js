import React from 'react';


const Nav = ({ items = [] }) => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.list}>
                {items.map(item => (
                    <li style={styles.listItem}>
                        <a href={item.url} style={styles.link}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


const styles = {
    nav: {
        padding: '0.5rem',
    },
    list: {
        display: 'flex',
        listStyle: 'none',
        
    },
    listItem: {
        marginRight: '1.5rem',
        padding: '10px 20px',
        border: '1px solid #fff',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1px',
    }
}

export default Nav;