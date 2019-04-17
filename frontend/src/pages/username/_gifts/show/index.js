import React from 'react'
import ModalComp from '../../../../components/ModalComp'

class ShowPage extends React.Component {
  state = {
    note: '',
    sender: null,
    song: '',
    image: '',
    songOpen: false,
    noteOpen: false,
    imgOpen: false
  }

  embedMusic = (input) => {
  const videoId = input.split('v=')[1]
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

  showModal = (e) => {

    this.setState({
      [e.target.classList[1]]: true
    })
  }

  closeShow = () => {
    this.setState({
      songOpen: false,
      noteOpen: false,
      imgOpen: false
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/gifts/${this.props.id}`)
    .then(resp => resp.json())
    .then(gift => {
      this.setState({
        note: gift.note,
        sender: gift.sender_id,
        song: gift.song,
        image: gift.image
      })
    })
  }

  render(){
    return(
      <div>
        <div id='showPageImage'>
          <div className='categoryContainer'>
          <div onClick={this.showModal} id='musicDiv' className='category songOpen'></div>
            </div>
          <div className='categoryContainer'>
            <div onClick={this.showModal} id='journalDiv' className='category noteOpen'></div>
          </div>
          <div className='categoryContainer'>
            <div onClick={this.showModal} id='pictureDiv' className='category imgOpen'></div>
          </div>
        </div>
          <h1 id='from'>From: {this.state.sender}</h1>

        <ModalComp show={this.state.songOpen} title={'Their Song'} close={this.closeShow}>
          <div className='horizontalCenter'>
            <img id='musicModalImg' src={require('../../../../assets/listeningToMusic2.gif')} />
          </div>
          <iframe width="0" height="0" allow="autoplay" src={this.embedMusic(this.state.song)}></iframe>
        </ModalComp>

        <ModalComp show={this.state.noteOpen} title={'Their Note'} close={this.closeShow}>
          {this.state.note}
        </ModalComp>

        <ModalComp show={this.state.imgOpen} title={'Their Picture'} close={this.closeShow}>
          <img src={`http://localhost:3000/${this.state.image}`} />
        </ModalComp>
      </div>
    )
  }
}

export default ShowPage
