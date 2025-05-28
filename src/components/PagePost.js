import React from 'react';
import Header from './layout/Header';
import ContentMain from './common/ContentMain';
import Footer from './layout/Footer';


class PagePost extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ContentMain />
                <Footer />
            </>
        )
    }
}

export default PagePost;