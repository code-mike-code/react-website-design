import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import galleryData from '../data/galleryData';
class PageGallery extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <Header />
                <Content 
                    galleryData={galleryData}
                />
                <Footer />
            </div>
        )
    }
}

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }
}

export default PageGallery;