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
    this.props.changeVideo(this.props.timestamp)
  }

  onDeleteTimestamp() {
    this.props.deleteTimestamp(this.props.timestamp)
  }
  
  render() {
    return (
      <Paper style={{width: '80%', margin: '10px', padding: '20px', display: 'inline-block', float: 'left'}}>
        <div style={{float: 'left'}}>
          {(this.props.timestamp / 60 | 0) + ':' + String(this.props.timestamp % 60).padStart(2, '0')}
        </div>
        <div style={{float: 'right'}}>
          <button onClick={this.onChangeVideo}>Watch This Clip</button>
          <button onClick={this.onDeleteTimestamp}>Delete</button>
        </div>
      </Paper>
      );
  }

}

export default TimestampListEntry;