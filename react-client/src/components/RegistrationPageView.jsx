import React from 'react';
import StudentReg from './registration-page-view/StudentReg.jsx';
import OwnerReg from './registration-page-view/OwnerReg.jsx';



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

export default Registration;