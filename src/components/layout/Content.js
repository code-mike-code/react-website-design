import React from "react";
import ContentLeft from '../common/ContentLeft';
import ContentRight from '../common/ContentRight';
import ContentMain from '../common/ContentMain';
import Gallery from '../common/Gallery'

class Content extends React.Component {
    state = {
        categories: [
            'Kitchen',
            'Sport',
            'Music',
            ],
        post: {
            title: 'Welcome to my first React post!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'John Doe',
            date: '27-05-2025',
        },
        rightContent: {
            popularPosts: [
                {title: 'Most popular post!', views: '1000'},
                {title: 'Second most popular post!', views: '700'},
                {title: 'Third most popular post!', views: '340'},
            ],
        },
        galleryData: {
            title: 'Gallery',
            images: [
                {id: 1, title: 'Macaroon', url: 'https://cdn.pixabay.com/photo/2022/06/29/08/27/macaroon-7291242_1280.jpg'},
                {id: 2, title: 'Fresh Mint', url: 'https://cdn.pixabay.com/photo/2016/10/25/17/59/mint-1769560_960_720.jpg'},
                {id: 3, title: 'Sea Turtle', url: 'https://cdn.pixabay.com/photo/2023/08/19/05/31/green-sea-turtle-8199770_1280.jpg'},
                {id: 4, title: 'Birds', url: 'https://cdn.pixabay.com/photo/2019/10/15/08/02/birds-4551002_960_720.jpg'},
            ]
        }
    }

    render() {
        const {categories, post, rightContent, galleryData} = this.state;

        return (
            <div style={styles.container}>
                <div style={styles.topSection}>
                    <ContentLeft categories={categories} />
                    <ContentMain post={post} />
                    <ContentRight content={rightContent}  />
                </div>
                <Gallery {...galleryData} />
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        margin: '0 auto',
    },
    topSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: '1rem',
    }
}


export default Content;