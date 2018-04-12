import React from 'react';
import axios from 'axios';


class StudentReg extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        student: true //Is this necessary??
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange(e) {
        this.setState({
          value: e.target.value
        }, () => {
        //   console.log(this.state.value);
        })
      }

      
     // submitting the input value;
    handleSubmit() {
        var user = {username: this.state.value, student: this.state.student}
        // console.log('here')
        axios.post('/username/register', user)
        .then((response) => {
          console.log(user);
          this.props.redirect(user);

        })
        .catch((err) => {
          console.log('error in client side', err);
        })
    }


  // getting the input value
    render () {
      return (
        <div>
            <h3> Register as Student </h3>
            <label>
              Name:
             <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
             <button onClick={this.handleSubmit}>Register</button>
        </div>
      )
    }
  }


// const StudentReg = (props) => (
//     <div onClick={props.handleClick}>
//       <input type="text" name="username"> </input>
//       <h4>Register as Owner</h4>
//     </div>
// )


export default StudentReg;