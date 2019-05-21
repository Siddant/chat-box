import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
// import Messages from './components/chat/Messages'
import Here from './common/Here'

import 'bulma'
import './style.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/here" component={Here} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
