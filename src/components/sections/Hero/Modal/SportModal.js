
import { Card, Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SportModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            tempState: '',
            favTeamsNam: []
        }
    }

    openModal = () => {
        this.setState({ showModal: true });
    };
    handleClose = () => {
        this.setState({ showModal: false });
    };
    eventhandler = (e) => {


        this.setState({
            tempState: e.target.value
        })


    }
    // favTeamsNam.push({this.tempState});
    render() {
        return (<div >
            <button onClick={this.openModal} >open</button>
            {
                this.state.showModal &&
                <>
                    <Modal className="modal" show={this.state.showModal} onHide={this.handleClose}>

                        <div className="modal-content" style={{ width: '1000px', height: '700px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Select your favorite Sport</h5>
                                <Button variant="secondary" onClick={this.handleClose} className="modalbutton">
                                    X
                                </Button>
                            </div>
                            <div className="modal-body">

                                <div className='col'>
                                    <Card >

                                        <Card.Body>

                                            <Card.Img src="https://static.toiimg.com/thumb/msid-70661134,imgsize-761205,width-800,height-600,resizemode-75/70661134.jpg" alt="" className="card-img" />

                                            <Card.Title>Basketball</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className='col'>
                                    <Card >

                                        <Card.Body >

                                            <Card.Img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" className="card-img" />
                                            <Card.Title>Football</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </div>
                            <>
                                <label style={{ fontSize: '30px' }}>Enter your favorite Team</label>
                                <input type="text" onSubmit={this.eventhandler} placeholder="Barcolana" style={{ width: '500px' }}></input>


                            </>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.handleClose} style={{ backgroundColor: 'red' }}>Close</button>
                                <button type="submit" style={{ backgroundColor: 'grey' }}>Search</button>
                            </div>
                        </div>

                    </Modal>
                </>
            }



        </div>
        )
    }
}


export default SportModal;
