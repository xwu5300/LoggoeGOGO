import React from 'react';
import StudentReg from './registration-page-view/StudentReg.jsx';
import OwnerReg from './registration-page-view/OwnerReg.jsx';
import {withRouter} from 'react-router-dom';



class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToStudentHomepage = this.redirectToStudentHomepage.bind(this);
    this.redirectToOwnerHomepage = this.redirectToOwnerHomepage.bind(this);
  }

  redirectToStudentHomepage(user) {
    this.props.history.push({
      pathname: '/student',
      username: user.username,

    })
  }

  redirectToOwnerHomepage(user) {
    this.props.history.push({
      pathname: '/owner',
      username: user.username
    })
  }

  render () {
    return (
    <div>
          <h1>REGISTRATIONS</h1>
          <StudentReg redirect={this.redirectToStudentHomepage}/>
          <OwnerReg redirect={this.redirectToOwnerHomepage}/>
    </div>
    )
  }
}

export default withRouter(Registration);