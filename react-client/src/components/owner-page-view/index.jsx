import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import VideoList from './VideoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
    this.getVideos = this.getVideos.bind(this);
    this.showVideoList = this.showVideoList.bind(this);
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


  render () {
    return (
      <div id="owner-homepage-app">
        <header className="navbar"><h1>Videos</h1></header>
        <div className="main">
          <Search getVideos={this.getVideos}/>
          <VideoList videos={this.state.videos}/>
        </div>  
      </div>   
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));