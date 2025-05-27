import React from "react";
import ContentLeft from '../common/ContentLeft';
import ContentRight from '../common/ContentRight';
import ContentMain from '../common/ContentMain';
import Gallery from '../common/Gallery'

const Content = ({ leftContent, rightContent, mainContent }) => {
    return (
        <div style={styles.container}>
            <div style={styles.topSection}>
                <ContentLeft content={leftContent} />
                <ContentRight content={rightContent}  />
                <ContentMain content={mainContent} />
            </div>
            <Gallery />
        </div>
    )
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