import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div id="owner-homepage-search-bar">
        <input value={this.state.userInput} 
          type="text"
          onChange={this.updateInput}
        />
        <button value="search" 
          onClick={() => this.props.getVideos(this.state.userInput)}
        > Click Here
        </button>
      </div>
    )
  }
}

export default Search