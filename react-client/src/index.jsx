import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import StudentHomepage from './components/student-homepage-view/StudentHomepage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (<div>
      <StudentHomepage />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));