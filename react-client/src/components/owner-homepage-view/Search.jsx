import React from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

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
    const style = {
      height: '100%',
      width: 'auto',
      margin: '20px',
      textAlign: 'center',
      display: 'inline-block',
      padding: '10px'
    }
    
    const button = {
      height: '10px',

    }
    return (
      <Paper style={style} zDepth={1}>
      <div id="owner-homepage-search-bar">
        <AutoComplete 
          dataSource={[]} 
          value={this.state.userInput} 
          type="text"
          onUpdateInput={this.updateInput}
        />
        <RaisedButton 
          label="Search" 
          value="search"
          onClick={() => this.props.getVideos(this.state.userInput)} 
        />

      </div>
      </Paper>
    )
  }
}

export default Search