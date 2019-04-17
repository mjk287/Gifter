import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class ModalComp extends React.Component {
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.close} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.props.children}</p>
          </Modal.Body>
      </Modal>
    )
  }
}

export default ModalComp
