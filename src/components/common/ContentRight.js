import React from 'react';

class ContentRight extends React.Component {
    render() {
        const popularPosts = [
            {title: 'Most popular post!', views: '1000'},
            {title: 'Second most popular post!', views: '700'},
            {title: 'Third most popular post!', views: '340'},
        ]

        return (
            <div style={styles.container}>
                <h3 style={styles.title}>Popular posts:</h3>
                <div style={styles.posts}>
                    {popularPosts.map(post => (
                        <div style={styles.post}>
                            <p style={styles.postTitle}>{post.title}</p>
                            <p style={styles.views}>{post.views} views</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        borderRadius: '4px',
        minHeight: '300px'
    },
    title: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: '#333'
    },
    posts: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
    },
    post: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        padding: '0.5rem',
        backgroundColor: '#fff',
        borderRadius: '4px',
    },
    postTitle: {
        fontWeight: 'bold',
    },
    views: {
        fontSize: '0.8rem',
        color: '#666',
    }
}

export default ContentRight;