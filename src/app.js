import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './common/Home'

class App extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
