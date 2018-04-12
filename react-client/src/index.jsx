import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LandingPage from './components/LandingPageView.jsx';
import RegistrationPage from './components/RegistrationPageView.jsx';
import StudentHomepage from './components/StudentHomepageView.jsx';
import StudentVideo from './components/StudentVideoView.jsx';
import OwnerHomepage from './components/OwnerHomepageView.jsx';
// import OwnerVideo from './components/OwnerVideoView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <OwnerHomepage />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));