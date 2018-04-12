import React from 'react';
import ReactDOM from 'react-dom';

class OwnerTimeStamps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="owner-time-stamps">
      {this.props.timeStamps.map((timeStamp, i) => (
          <div className="time-stamp" key={i}>
            Timtamp: {timeStamp.timestamp}
          </div>
      ))}
    </div>   

    )
  }
}

export default OwnerTimeStamps;