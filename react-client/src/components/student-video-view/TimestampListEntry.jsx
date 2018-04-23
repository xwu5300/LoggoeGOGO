import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

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
      <Paper style={{width: '80%', margin: '10px', padding: '20px', display: 'inline-block', float: 'left'}}>
        <div style={{float: 'left'}}>
        <h4 style={{display: 'inline'}}>Timestamp: </h4> {(this.props.timestamp.timestamp / 60 | 0) + ':' + String(this.props.timestamp.timestamp % 60).padStart(2, '0')}
        </div>
        <div style={{float: 'left'}}>
        <h4 style={{display: 'inline'}}>Comment: </h4> {this.props.timestamp.comment}
        </div>
        <div style={{float: 'left'}}>
          <button onClick={this.onChangeVideo}>Watch This Clip</button>
          <button onClick={this.onDeleteTimestamp}>X</button>
        </div>
      </Paper>
      );
  }

}

export default TimestampListEntry;