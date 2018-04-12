import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './owner-homepage-view/Search.jsx';
import VideoList from './owner-homepage-view/VideoList.jsx';
import OwnerVideoView from './owner-video-view/OwnerVideoView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: '',
      timeStamps: []
    }
    this.getVideos = this.getVideos.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
    this.updateDisplayVideo = this.updateDisplayVideo.bind(this);
    this.showTimestamps = this.showTimestamps.bind(this);
  }

  componentDidMount() {
    this.showVideoList();
  }
  
  updateDisplayVideo(video) {
    this.setState({
      video: video
    })
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

  showTimestamps(videoId) {
    axios.get('/timestamps', {params: {videoId: videoId}})
         .then((data) => {
           console.log('data in index.jsx timestamp', data.data)
           this.setState({
             timeStamps: data.data
           })
         })
  }

  render () {
    return (
      <div id="owner-homepage-app">
        <header className="navbar"><h1>Videos</h1></header>
        <div className="main">
          <Search getVideos={this.getVideos}/>
          <VideoList 
            videos={this.state.videos} 
            updateDisplayVideo={this.updateDisplayVideo}
            showTimestamps = {this.showTimestamps}
          />
          <OwnerVideoView 
            video={this.state.video}
            timeStamps={this.state.timeStamps}
          />
        </div>  
      </div>   
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));