import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/SearchBox';
let words=[];
class AutoComplete extends React.Component{

  constructor(props){
    super(props);
    this.state=(
      {
        words:[],
        length: 0
      }
    );
  }

  uploadFile = (e) => {
      var reader = new FileReader();
      var self = this;
      reader.onload = function(e){
         let contents = e.target.result;
         words = contents.split('\n');
         self.setState(
           {
             words: words,
             length:words.length
           }
         )
      }
      reader.readAsText(e.target.files[0]);
  }

  render(){
      return(
        <div>
          <input type="file" onChange={this.uploadFile}/>
          {
              this.state.length > 0 &&
              <SearchBox words={this.state.words}/>
          }
        </div>
      )
  }
}

ReactDOM.render(<AutoComplete />, document.getElementById('app'));
