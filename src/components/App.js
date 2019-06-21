import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../styles/custom.css'
import ErrorBoundary from './common/ErrorBoundary'
class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Main />
                <Footer />
            </ErrorBoundary>
        )
    }
}
export default App;