import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput'
import TodoList from './TodoList';

class App extends Component {
    state = {
        input: '',
        todos: [
        ]
    }
    id = 1
    getId = () => {
        console.info("id : " + this.id);
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        })
    }

    handleInsert = () => {
        const { todos, input } = this.state;

        if (input.trim().length === 0) {
            alert("Please enter todo item");
            return;
        }
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        }

        this.setState({
            todos: [...todos, newTodo],
            input: ''
        })
    }

    handleToggle = (id) => {

        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
                ...todos.slice(0, index),
                {
                    ...todos[index],
                    done: !todos[index].done
                },
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }

    handleRemove = (id) => {

        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }
    render() {
        const { input, todos } = this.state;
        return (

            <PageTemplate>
                <TodoInput onChange={this.handleChange} onInsert={this.handleInsert} value={input} />
                <TodoList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove}></TodoList>
            </PageTemplate>
        )
    }
}

export default App; 