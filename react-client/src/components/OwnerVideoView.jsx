import {withRouter} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import OwnerVideoPlayer from './owner-video-view/OwnerVideoPlayer.jsx';
import OwnerTimeStamps from './owner-video-view/OwnerTimeStamps.jsx';
import Analytics from './owner-video-view/Analytics.jsx';

class OwnerVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamps: []
    }
  }

  componentDidMount() {
    this.showTimestamps();
  }

  showTimestamps() {
    axios.get('/timestamps/owner', {params: {videoId: this.props.location.videoId}})
      .then((data) => {
        var timeStamps = data.data.sort((a, b)=> a.timestamp - b.timestamp)
        this.setState({timeStamps: timeStamps})
      })
  }

  render() {
    return (
      <div id="owner-video-view">
        Owner Videos
        <div>
          <OwnerVideoPlayer videoId={this.props.location.videoId}/>
          {this.state.timeStamps.length !== 0 && <OwnerTimeStamps timeStamps={this.state.timeStamps}/>}
          <Analytics />
        </div>  
      </div>  
    )
  }
}

export default withRouter(OwnerVideo);