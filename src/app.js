import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
import Auth from './lib/Auth'
import Navbar from './common/Navbar'

import './style.scss'
if (Auth.isAuthenticated()) {
    global.socket = require('socket.io-client')(`http://localhost:4000`);
}
class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <main>
                        <Navbar />

                        <Switch>
                            {/* <Route path="/here" component={Here} /> */}
                            <Route path="/" component={Home} />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
