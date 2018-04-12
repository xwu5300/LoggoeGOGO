import React from 'react';
import VideoList from './student-homepage-view/VideoListView.jsx';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class StudentHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            videoList: [],
        }
        this.redirectToSelectedVideo = this.redirectToSelectedVideo.bind(this);
    }

    componentDidMount() {
        axios.get('/student/homepage').then((response) => this.setState({videoList: response.data})); 
    }

    redirectToSelectedVideo(videoId) {
        // console.log('video from videolist entry',videoId);
        this.props.history.push({
            pathname: '/student/video',
            videoId: videoId,
          })
    }

    render() {
        return (
            <div>
              <div> 
                  Search Bar
                  <input />
              </div>
              <VideoList videos={this.state.videoList} redirect={this.redirectToSelectedVideo}/>
            </div>
          )
    }
}

export default withRouter(StudentHomepage);