import React from 'react';

class TimestampListEntry extends React.Component {
  constructor(props) {
    super(props)
    
    this.onDeleteTimestamp = this.onDeleteTimestamp.bind(this)
    this.onChangeVideo = this.onChangeVideo.bind(this)

  }

  onChangeVideo() {
    this.props.changeVideo(this.props.timestamp.timestamp)
  }

  onDeleteTimestamp() {
    this.props.deleteTimestamp(this.props.timestamp.timestamp)
  }
  
  render() {
    return (
      <li>{this.props.timestamp.timestamp}{this.props.timestamp.comment}
      <button onClick={this.onChangeVideo}>Watch This Clip</button>
      <button onClick={this.onDeleteTimestamp}>Delete</button>
      </li>
      );
  }

}

export default TimestampListEntry;