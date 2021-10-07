import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import News from './components/news'

const App = () => {
    return (
        <React.Fragment>
           <Header/>
           <News/>
        </React.Fragment>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))