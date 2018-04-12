import React from 'react';
import axios from 'axios';
import OwnerVideoPlayer from './owner-video-view/OwnerVideoPlayer.jsx';
import OwnerTimeStamps from './owner-video-view/OwnerTimeStamps.jsx';
import Analytics from './owner-video-view/Analytics.jsx';


class OwnerVideo extends React.Component {
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

export default OwnerVideo;