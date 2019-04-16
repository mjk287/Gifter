import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class ModalComp extends React.Component {
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.props.children}</p>
          </Modal.Body>
      </Modal>
    )
  }
}

export default ModalComp
