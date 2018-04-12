import React from 'react';
import axios from 'axios';
import Search from './owner-homepage-view/Search.jsx';
import VideoList from './owner-homepage-view/VideoList.jsx';
import OwnerVideo from './OwnerVideoView.jsx';
import {withRouter} from 'react-router-dom';

class OwnerHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: ''
    }
    this.getVideos = this.getVideos.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
    this.redirectToSelectedVideo = this.redirectToSelectedVideo.bind(this);
  }

  componentDidMount() {
    this.showVideoList();
  }
  
  getVideos(query) {
    axios.get('/owner/search', {params: {query: query}})
         .then((data) => {
           this.showVideoList();
         })
  }

  showVideoList() {
    axios.get('/owner/videoList')
         .then((data) => {
           this.setState({
             videos: data.data
           })    
         })
  }

  redirectToSelectedVideo(video) {
    this.props.history.push({
        pathname: '/owner/video',
        video: video
      })
}
  render () {
    return (
      <div id="owner-homepage-app">
        <header className="navbar"><h1>Owner Videos</h1></header>
        <div className="main">
          <Search getVideos={this.getVideos}/>
          <VideoList 
            videos={this.state.videos} 
            redirect={this.redirectToSelectedVideo}
          />
        </div>  
      </div>   
    )
  }
}

export default withRouter(OwnerHomepage);