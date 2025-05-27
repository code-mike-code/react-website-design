import React from 'react';

const Logo = () => {
    return (
        <div style={styles.logo}>
            <h1>Site Title(LOGO)</h1>
        </div>
    )
}

const styles = {
    logo: {
        fontSize: '1,5rem',
        fontWeight: 'bold',
        color: '#fff',    
        textTransform: 'uppercase',
    }
}

export default Logo;