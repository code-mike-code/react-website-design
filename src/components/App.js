import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#dfe6e9',
        height: '100vh',
    }
}

export default App;