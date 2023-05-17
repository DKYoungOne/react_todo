import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      todos: ['what', 'to', 'do'],
      text: ''
    }
  }
  
  onClickHandler = () => {
    console.log(this.state)
    this.setState(
      {
        isClicked: !this.state.isClicked
        
      }
    )
  }

  onAddTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
  
    })
    console.log(this.state);
    
  }

  onChangeHandler = ({ target }) => {
    console.log(target.value);
    this.setState({
      text: target.value,
    })
  }
  
  handleDelete = idx => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== idx)
    })
  }

  render() {
      return (
        <div className="App">
            <button type="button" onClick={this.onClickHandler}>
              {this.state.isClicked ? 'It is clicked' : 'Not clicked'}
            </button>
            <br />
            <input type="text" onChange={this.onChangeHandler}></input>
            <button type="button" onClick={this.onAddTodo}>Add Todo</button>
            
            <ul>
              {this.state.todos.map((todo, idx) => {
                return (
                  <li key={idx}>
                    {todo}{' '}
                    <button type="button" onClick={() => this.handleDelete(idx)}>Delete</button>
                  </li>
                )
                  
              })}
            </ul>
            
        </div>
    );
  }
}

export default App;
