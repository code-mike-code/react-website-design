import React from 'react';
import Nav from '../common/Nav';



const Footer = () => {
    const copyrightTextYear = `© ${new Date().getFullYear()} My React Website. All rights reserved.`
    const footerMenuItems = [
        {text: 'Home', url: '/home'},
        {text: 'About', url: '/about'},
        {text: 'Contact', url: '/contact'},
        {text: 'Privacy Policy', url: '/privacy-policy'},
        {text: 'Terms of Service', url: '/terms-of-service'},
    ]

   return (
    <footer style={styles.footer}>
        <Nav style={styles.link} items={footerMenuItems} />
        <p style={styles.copyrightTextYear}>{copyrightTextYear}</p>
    </footer>
   )

}

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#00b894',
        color: '#fff',
        padding: '2rem',
        marginTop: 'auto',
    },
    copyrightTextYear: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    }
}

export default Footer;