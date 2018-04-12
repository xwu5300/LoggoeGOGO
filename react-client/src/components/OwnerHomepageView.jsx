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
      video: '',
      userId: ''
    }
    this.getVideos = this.getVideos.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
    this.redirectToSelectedVideo = this.redirectToSelectedVideo.bind(this);
    this.getUserId = this.getUserId.bind(this);
  }

  componentDidMount() {
    this.getUserId(this.props.location.username)
  }
  
  getVideos(query) {
    axios.get('/owner/search', {params: {query: query, userId: this.state.userId}})
         .then((data) => {
           this.showVideoList(this.state.userId);
         })
  }

  getUserId(user) {
    axios.get('/users', {params: {user: user}})
         .then((data) => {
           this.setState({
             userId: data.data[0].id
           })
           this.showVideoList(data.data[0].id);
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

  redirectToSelectedVideo(video) {
    this.props.history.push({
        pathname: '/owner/video',
        video: video,
        username: this.props.location.username
      })
}
  render () {
    // console.log('userId in this.stats owner home page', this.state.userId)
    return (
      <div id="owner-homepage-app">
        <header className="navbar"><h1>Owner Videos</h1></header>
        <div className="main">
          <Search getVideos={this.getVideos}/>
          <VideoList 
            userId={this.state.userId}
            videos={this.state.videos} 
            redirect={this.redirectToSelectedVideo}
          />
        </div>  
      </div>   
    )
  }
}

export default withRouter(OwnerHomepage);