import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  
  id = 3
  state = {
    todos:[
    {id: 0, text: '연습1', checked:false},
    {id: 1, text: '연습2', checked:false},
    {id: 2, text: '연습3', checked:false}
  ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const {input, todos } = this.state;
    this.setState({
      input:'',
      todos: todos.concat({
        id: this.id++,
        text: input,
        check: false
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todos => todos.id ===id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
   return (
    <TodoListTemplate form={<Form 
                                  value={input}
                                  onKeyPress={handleKeyPress}
                                  onChange={handleChange}
                                  onCreate={handleCreate}/>}>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
   )
  }
}

export default App;