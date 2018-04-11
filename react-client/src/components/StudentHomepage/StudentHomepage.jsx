import React from 'react';
import VideoList from './VideoListView.jsx';
import axios from 'axios';

class StudentHomepage extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            videoList: [],
        }
    }

    componentDidMount() {
        axios.get('/videos')
            .then((response) => this.setState({videoList: response.data})); 
    }

    render() {
        return (
            <div>
              <div> Search Bar
                  <input />
              </div>
              <VideoList videos={this.state.videoList}/>
            </div>
          )
    }
}

export default StudentHomepage;