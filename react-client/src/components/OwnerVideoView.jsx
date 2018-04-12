import React from 'react';
import axios from 'axios';
import OwnerVideoPlayer from './owner-video-view/OwnerVideoPlayer.jsx';
import OwnerTimeStamps from './owner-video-view/OwnerTimeStamps.jsx';
import Analytics from './owner-video-view/Analytics.jsx';
import {withRouter} from 'react-router-dom';

class OwnerVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamps: []
    }
  }

  componentDidMount() {
    this.showTimestamps();
    console.log('within the owner video view: ', this.props.location)
  }

  showTimestamps(videoId) {
    axios.get('/timestamps', {params: {videoId: this.props.location.video.videoId}})
         .then((data) => {
           var timeStamps = data.data.sort()
           this.setState({
             timeStamps: timeStamps
           })
         })
  }

  render() {
    return (
      <div id="owner-video-view">
        Owner Videos
        <div>
          {!!this.props.location.video && <OwnerVideoPlayer video={this.props.location.video}/>}
          {this.state.timeStamps.length !== 0 && <OwnerTimeStamps timeStamps={this.state.timeStamps}/>}
          <Analytics />
        </div>  
      </div>  
    )
  }
}

export default withRouter(OwnerVideo);