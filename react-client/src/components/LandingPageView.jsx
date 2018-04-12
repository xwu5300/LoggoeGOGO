import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      exists: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

// getting the input value
  handleChange(e) {
    this.setState({value: e.target.value})
  }


 // submitting the input value;
  handleSubmit() {
    var user = {username: this.state.value}

    // sending user data; 
    axios.post('/username/login', user)
      .then((response) => {

        if (!response.data.length) {
          this.setState({
            value: ''
          })
          window.alert('username does not exist');
        } else {
          if (response.data[0].owner) {
            this.props.history.push({
              pathname: '/owner',
              username: response.data[0].name,
            })
          } else {
            this.props.history.push({
              pathname: '/student',
              username: response.data[0].name,
            })
          }
        }
      })
      .catch((err) => console.log('PROBLEMS: ', err))
  }

  handleRegister() {
    this.props.history.push({
      pathname: '/registration'
    })
  }
  
  render () {
    return (
      <div>
          <h3> Username: </h3>
          <label>
            Name:
           <input type="text" name="username" value={this.state.value} onChange={this.handleChange}/>
          </label>

           <button onClick={this.handleSubmit}>Submit</button>
           <button onClick={this.handleRegister}>Register</button> 
    </div>
    )
  }

}

export default withRouter(LandingPage);