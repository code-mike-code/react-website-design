import React from 'react';

class Gallery extends React.Component {
    render() {
        const images = [
            {id: 1, title: 'Macaroon', url: 'https://cdn.pixabay.com/photo/2022/06/29/08/27/macaroon-7291242_1280.jpg'},
            {id: 2, title: 'Fresh Mint', url: 'https://cdn.pixabay.com/photo/2016/10/25/17/59/mint-1769560_960_720.jpg'},
            {id: 3, title: 'Sea Turtle', url: 'https://cdn.pixabay.com/photo/2023/08/19/05/31/green-sea-turtle-8199770_1280.jpg'},
            {id: 4, title: 'Birds', url: 'https://cdn.pixabay.com/photo/2019/10/15/08/02/birds-4551002_960_720.jpg'},
        ]

        return (
            <div style={styles.gallery}>
                <h2 style={styles.title}>Gallery</h2>
                <div style={styles.container}>{images.map(image => (
                    <div key={image.id} style={styles.imageCard}>
                        <img 
                            src={image.url} 
                            alt={image.title}
                            style={styles.image} />
                        <h4 style={styles.imgTitle}>{image.title}</h4>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}


const styles = {
    gallery: {
        padding: '2rem',
        marginBottom: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '2rem',
        padding: '0.5rem',
        textTransform: 'uppercase',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '2rem',
    },
    imageCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    imgTitle: {
        padding: '0.5rem',
        textAlign: 'center',
        
    }
}

export default Gallery;