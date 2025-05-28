import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';


class PageGallery extends React.Component {
    state = { 
    galleryData: {
        title: 'Gallery',
        images: [
            {id: 1, title: 'Macaroon', url: 'https://cdn.pixabay.com/photo/2022/06/29/08/27/macaroon-7291242_1280.jpg'},
            {id: 2, title: 'Fresh Mint', url: 'https://cdn.pixabay.com/photo/2016/10/25/17/59/mint-1769560_960_720.jpg'},
            {id: 3, title: 'Sea Turtle', url: 'https://cdn.pixabay.com/photo/2023/08/19/05/31/green-sea-turtle-8199770_1280.jpg'},
            {id: 4, title: 'Birds', url: 'https://cdn.pixabay.com/photo/2019/10/15/08/02/birds-4551002_960_720.jpg'},
        ]
    },
    leftColumnContent: <h2>Categories</h2>,
    rightColumnContent: <h2>Popular Posts</h2>,
}


    render() {
        const { galleryData, leftColumnContent, rightColumnContent } = this.state;
        return (
            <div style={styles.page}>
                <Header />
                <Content 
                    leftContent={leftColumnContent}
                    mainContent={<Gallery {...galleryData} />}
                    rightContent={rightColumnContent}
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