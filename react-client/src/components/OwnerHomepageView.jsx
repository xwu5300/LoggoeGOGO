import {withRouter} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import VideoList from './owner-homepage-view/VideoList.jsx';
import Search from './owner-homepage-view/Search.jsx';
import OwnerVideo from './OwnerVideoView.jsx';

class OwnerHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: '',
      userId: ''
    }
    this.getVideos = this.getVideos.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
    this.sendToSelectedVideo = this.sendToSelectedVideo.bind(this);
  }

  componentDidMount() {
    this.getUserId(this.props.location.username);
  }
  
  getVideos(query) {
    axios.get('/owner/search', {params: {query: query, userId: this.state.userId}})
         .then((data) => {
           this.setState({
            videos: [...this.state.videos, data.data[0]]
           })
         })
  }

  getUserId(user) {
    axios.get('/user/id', {params: {user: user}})
         .then((data) => {
           this.setState({userId: data.data[0].id}, ()=> {
             this.showVideoList(data.data[0].id);
           });
           
         })
  }

  showVideoList(userId) {
    axios.get('/owner/videoList', {params: {userId: userId}})
          .then((data) => {
            this.setState({
              videos: data.data
            })
          })
  }

  sendToSelectedVideo(video) {
    this.props.history.push({
        pathname: '/owner/video',
        video: video, 
        userId: this.state.userId
      })
  }

  render () {
    return (
      <div id="owner-homepage-app">
        <header className="navbar"><h1>Owner Videos</h1></header>
        <div className="main">
          <Search getVideos={this.getVideos}/>
          <VideoList 
            userId={this.state.userId}
            videos={this.state.videos} 
            redirect={this.sendToSelectedVideo}
          />
        </div>  
      </div>   
    )
  }
}

export default withRouter(OwnerHomepage);