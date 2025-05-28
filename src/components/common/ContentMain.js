import React from 'react';
class ContentMain extends React.Component {
    render() {
        const { post } = this.props
        return (
            <main style={styles.container}>
                <article style={styles.article}>
                    <h2 style={styles.title}>{post.title}</h2>
                    <p style={styles.content}>{post.content}</p>
                    <footer style={styles.meta}>
                        <em>Written by {post.author} on {post.date}</em>
                    </footer>
                </article>
            </main>
        )
    }
}


const styles = {
    container: {
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        minHeight: '500px'
    },
    article: {
        marginBottom: '2rem'
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#333'
    },
    content: {
        lineHeight: '1.6',
        color: '#666'
    },
    meta: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#999',
        fontSize: '0.9rem'
    },
}

export default ContentMain;