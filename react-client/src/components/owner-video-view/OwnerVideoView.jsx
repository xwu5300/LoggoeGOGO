import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import OwnerVideoPlayer from './OwnerVideoPlayer.jsx';
import OwnerTimeStamps from './OwnerTimeStamps.jsx';
import Analytics from './Analytics.jsx';


class OwnerVideoView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="owner-video-view">
        Owner Videos
        <div>
          {!!this.props.video && <OwnerVideoPlayer video={this.props.video}/>}
          {this.props.timeStamps.length !== 0 && <OwnerTimeStamps timeStamps={this.props.timeStamps}/>}
          <Analytics />
        </div>  
      </div>  
    )
  }
}

export default OwnerVideoView;