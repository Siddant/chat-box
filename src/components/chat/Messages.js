import React from 'react'
import ChatRoom from './ChatRoom'
import Inbox from './Inbox'
const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class Messages extends React.Component {

    render() {
        return (
            <section className="section has-margin">
                <div className="container container-full-screen" >
                    <h2 className="title is-4">Messaging</h2>
                    <div className="columns Messaging">
                        <div className="column is-one-third">
                            <h3 className="title is-5">Recent</h3>
                            <div className="inbox">
                                {messages.map((number, index) =>
                                    < Inbox key={index} />
                                )
                                }

                            </div>
                        </div>
                        <ChatRoom />


                    </div>
                </div>
            </section>

        )
    }
}

export default Messages