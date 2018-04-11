import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import StudentReg from './StudentReg.jsx';
import OwnerReg from './OwnerReg.jsx';



class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      registerClicked: ''
    }
  }




  render () {
    return (
    <div>
          <h1>REGISTRATIONS</h1>
          <OwnerReg />
          <StudentReg />
    </div>
    )
  }
}

ReactDOM.render(<Registration />, document.getElementById('app'));