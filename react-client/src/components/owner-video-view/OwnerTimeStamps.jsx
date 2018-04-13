import React from 'react';
import Paper from 'material-ui/Paper';

class OwnerTimeStamps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="owner-time-stamps" >
      {this.props.timeStamps.map((timeStamp, i) => (
        <Paper style={{margin: '20px'}}>
          <div className="time-stamp" key={i} style={{padding: '20px', display: 'block'}}>
            <div style={{display: 'block'}}>
              Timestamp: {(timeStamp.timestamp / 60 | 0) + ':' + String(timeStamp.timestamp % 60).padStart(2, '0')}
            </div>
            <div style={{display: 'block'}}>
              Student: {timeStamp.name}
            </div>
          </div>
        </Paper>
      ))}
    </div>   
    )
  }
}

export default OwnerTimeStamps;