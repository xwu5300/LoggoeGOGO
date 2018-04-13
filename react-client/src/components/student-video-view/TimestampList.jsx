import React from 'react';

import TimestampListEntry from './TimestampListEntry.jsx';

class TimestampList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      items: null
    };
  }
  
  render() {
    console.log('timestamp list', this.props.timestamps)
    return (
      <div>
        <div>
          {this.props.timestamps.map((timestamp, index) => {
            return <TimestampListEntry 
            key={index} 
            timestamp={timestamp} 
            changeVideo={this.props.changeVideo} 
            deleteTimestamp={this.props.deleteTimestamp}/>
          })}
        </div>
      </div>
    );
  }

}

export default TimestampList;