import React from 'react'
import Message from './Message'
// const messages = [1]
// import io from 'socket.io-client'
const socket = require('socket.io-client')(`http://localhost:4000`);
import io from "socket.io-client";

class ChatRoom extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [1]
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        // this.socket = io('http://localhost:4000')

        this.socket = io('localhost:4000');

        // this.socket.on('RECEIVE_MESSAGE', function (data) {
        //     addMessage(data);
        // });




        this.socket.on('recieving message', (msg) => {
            console.log(msg)

            const messages = [...this.state.messages, msg]

            this.setState({ ...this.state, messages })
        }
        )

    }
    handleSumbit(e) {
        e.preventDefault()
        // global.socket.emit('chat message', 'sending')
        this.socket.emit('chat message', {
            user: ["5cb5174249414f4e9dec2709", '5cba455b1eb2afd7687319b1'],
            showId: '5cba455b1eb2afd7687319b1',
            message: {
                user: '5cba455b1eb2afd7687319b1',
                text: 'hello'
            }
        })
    }

    // componentDidMount() {
    //     // global.socket.on('chat message', (msg) => {
    //     //     console.log(msg)

    //     //     const messages = [...this.state.messages, msg]

    //     //     this.setState({ ...this.state, messages })
    //     // }
    //     // )

    // }

    render() {
        return (
            <div className="column">
                <div className="inbox">
                    {this.state.messages.map((number, index) =>
                        < Message key={index} />
                    )
                    }

                </div>

                <form className="form" onSubmit={this.handleSumbit}>
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Write your message..." />
                        </p>
                        <p className="control">
                            <button className="button is-link is-outlined is-large">
                                Send
                    </button>
                        </p>
                    </div>

                </form>
            </div>)
    }
}

export default ChatRoom