import React from 'react';
class ContentLeft extends React.Component {
    render() {
        const { categories } = this.props
        return (
            <div style={styles.container}>
                <h3 style={styles.title}>Categories</h3>
                <ul style={styles.list}>
                    {categories.map(category => (
                        <li style={styles.listItem}>{category}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        borderRadius: '4px',
        minHeight: '300px',
    },
    title: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: '#333',
    },
    list: {
        listStyle: 'none',
    },
    listItem: {
        padding: '0.5rem 0',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
    }
}

export default ContentLeft;