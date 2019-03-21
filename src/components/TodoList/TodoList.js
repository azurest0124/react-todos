import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map((todo, index) => (
            <TodoItem
                key={todo.id}
                done={todo.done}
                id={index}
                onToggle={() => onToggle(todo.id)}
                onRemove={(e) => {
                    onRemove(todo.id);
                    e.stopPropagation();
                }}
            >{todo.text}</TodoItem>
        ))
        return (
            <div>
                {todoList}
            </div>
        )
    }
}


export default TodoList; 