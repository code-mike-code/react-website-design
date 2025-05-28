import React from 'react';
import Header from './layout/Header';
import Gallery from './common/Gallery';
import Footer from './layout/Footer';


class PageGallery extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Gallery />
                <Footer />
            </>
        )
    }
}

export default PageGallery;