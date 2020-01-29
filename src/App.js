import React , {Component} from 'react';
import Note from './Component/Note';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      noteText:'',
      notes:[],
    };
  }
  updateSearch = e=>{
   this.setState({
    noteText:e.target.value
    }) ; 
    // console.log(search);
    console.log(this.state.noteText);
  }

  handleKeyPress = (event)=>{
      if(event.key === "Enter"){
        console.log("Press enter");
      this.addNode()
      }
  }
  addNode = ()=>{
    if(this.state.noteText=== ''){
      return 
    }
    let notesArray = this.state.notes;
    notesArray.push(this.state.noteText);
    this.setState({noteText:''})
   
  }
  deleteNote = (index)=>{
    let noteAttr  =this.state.notes ; 
    noteAttr.splice(index , 1);
    this.setState({
      notes:noteAttr
    })
  }
  render(){

    let notes = this.state.notes.map((val , key) => {
      return <Note key = {key} text={val}  deleteMethod={
        ()=>this.deleteNote(key)
      }/>
    }) ;
    return(

      <div className="container">
          <div className="header">
              React Todo APP
          </div>
          {notes}
          <div className="btn" onClick={this.addNode.bind(this)}>+</div>
          <input type="text" 
          placeholder="Text here"
          className="textInput"
           value={this.state.noteText}
           onChange={this.updateSearch} 
           onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }
}

export default App;
