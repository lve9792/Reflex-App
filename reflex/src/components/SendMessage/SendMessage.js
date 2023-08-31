import './SendMessage.css';
import React from 'react';
//import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'


class SendMessage extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    
        this.state = {
            message: '',
            showModal: false
        }
    }

    handleClick = () => {
        console.log("hi")
    }

    toggleModal = () => {
        console.log("toggle")
        this.setState({showModal: !this.state.showModal})
    }

    handleChange = (e) => {
        const msg = e.target.value;
        console.log(msg);

        this.setState({message: msg})
    }

    render() {
        return (
            <div className="rfx-sendMessage">

                {this.state.showModal ?
                <div className='send-message-modal'>
                    <button onClick={this.toggleModal}>
                        <span><FontAwesomeIcon icon={faX} /></span>
                    </button>
                    <p>Ask your question here</p>
                    <textarea onChange={this.handleChange} name='message' id="message"></textarea>
                    <button className='button' onClick={this.handleClick}> Submit </button>
                </div>
                :
                <div className='btn-group bottom-right'>
                    <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    <button className='button' onClick={this.toggleModal}> Send Message </button>
                </div>
                }


               
               
            </div>
        );
    }
}

export default SendMessage;
