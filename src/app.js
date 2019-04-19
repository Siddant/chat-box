import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                        <Switch>

                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
