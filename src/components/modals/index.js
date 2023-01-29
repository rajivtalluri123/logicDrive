import React, {useState} from 'react'
import "./style.css";
import {Modal, Button} from 'react-bootstrap';

class LearnMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {

        const modalClose = () => this.setState({show: false});
        const modalShow = () => this.setState({show: true});
        console.log(this.props);

        return (
            <div className="App p-4">
                <Button className="btn learn-more-btn" onClick={modalShow}>
                    Learn More
                </Button>
                <Modal size='lg'  show={this.state.show} onHide={modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.details.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.details.content}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


}
export default LearnMore

