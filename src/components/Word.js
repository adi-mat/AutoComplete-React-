import React from 'react';

export default class Word extends React.Component{


  handleClick = (event) => {
      const val = event.target.getAttribute('value');
      this.props.handleClick(val);
  }

  render(){
      return(
            <div onClick={this.handleClick} value={this.props.word}>{this.props.word}</div>
      )
  }
}
