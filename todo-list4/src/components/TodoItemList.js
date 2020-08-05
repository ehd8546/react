import React, {Component} from 'react';
import TodoItem from './TodoItem';
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                id={id}
                text={text}
                onToggle={onToggle}
                onRemove={onRemove}
                checked={checked}
                key={id}/>
            )
        )
        return (
            <div>
                {todoList}
            </div>
            )
    }
}

export default TodoItemList;