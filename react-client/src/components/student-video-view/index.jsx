import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx'
import TimestampList from './TimestampList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timestamps: []
    }
    this.getAllTimestamps = this.getAllTimestamps.bind(this);
  }



  componentDidMount(){
    const videoId = '8o5Cmfpeo6g';
    this.getAllTimestamps(videoId);
  }



  //gets videoId as a prop
  getAllTimestamps (videoId) {
    axios.get('/timestamps', {
      params: {
        videoId: videoId
      }
    })
    .then((data) => (data.data.map((TS) => {return TS.timestamp})))
    .then((timestamps) => this.setState({timestamps: timestamps}))
    .then(() => console.log(this.state.timestamps))
  }





  render () {    
    return (<div>
      {/* <h1>Item List</h1> */}
      {/* <List items={this.state.items}/> */}
      <VideoPlayer/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));