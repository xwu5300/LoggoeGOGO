import {withRouter} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import VideoList from './student-homepage-view/VideoListView.jsx';

class StudentHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            videoList: [],
        }
        this.sendToSelectedVideo = this.sendToSelectedVideo.bind(this);
    }

    componentDidMount() {
        axios.get('/student/homepage')
            .then((response) => this.setState({videoList: response.data})); 
    }

    sendToSelectedVideo(videoId) {
        this.props.history.push({
            pathname: '/student/video',
            videoId: videoId,
            username: this.props.location.username
          })
    }

    render() {
        return (
            <div>
              <div> 
                  Search Bar
                  <input />
              </div>
              <VideoList videos={this.state.videoList} redirect={this.sendToSelectedVideo}/>
            </div>
          )
    }
}

export default withRouter(StudentHomepage);