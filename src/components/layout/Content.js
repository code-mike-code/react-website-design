import React from "react";
import ContentLeft from '../common/ContentLeft';
import ContentRight from '../common/ContentRight';
import ContentMain from '../common/ContentMain';

const Content = ({ leftContent, rightContent, mainContent }) => {
    return (
        <div style={styles.container}>
            <ContentLeft content={leftContent} />
            <ContentRight content={rightContent}  />
            <ContentMain content={mainContent} />
        </div>
    )
}


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: '1rem',
        padding: '1rem',
    }
}

export default Content;