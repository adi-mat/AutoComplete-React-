import React from 'react';
import Word from './Word'
export default class SearchBox extends React.Component {

  constructor(props){
    super(props);
    this.state=({userInput:""});
    this.changeName = this.changeName.bind(this);
  }

  updateSearch = (event) => {
    this.setState({userInput: event.target.value});
  }

  changeName = (newName) => {
      let inputArray = this.state.userInput.toLowerCase().split(" ")
      inputArray.pop();
      inputArray.push(newName);
      inputArray = inputArray.join(" ").toString() + " ";
      this.setState({userInput: inputArray});
      this.textSpace.focus();
  }

  render(){
    let suggestedWords = this.props.words;
    return(
      <div>
        <textarea ref={(textarea) => {this.textSpace = textarea}} placeholder="Enter Text here..." type='text' className="textBox" value={this.state.userInput} onChange={this.updateSearch}/>
            <div className="dialog">
              {suggestedWords.map((word, index) => {
                let input = this.state.userInput.toLowerCase().split(" ").pop();
                if(input!="" && word.substr(0, input.length) == input)
                  return (
                     <Word word={word} key={index} handleClick={this.changeName}/>
                  )
              })}
            </div>
    </div>
    )
  }
}
